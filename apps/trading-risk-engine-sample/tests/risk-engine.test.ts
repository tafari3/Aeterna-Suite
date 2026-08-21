import { describe, expect, it } from 'vitest';
import { RiskInputError, type RiskPolicy, type TradeIntent } from '../src/domain.js';
import { buildTradePlan } from '../src/risk-engine.js';

const policy: RiskPolicy = {
  maxRiskFraction: 0.01,
  minRewardToRisk: 2,
  maxNotionalLeverage: 5,
};

const baseIntent: TradeIntent = {
  symbol: 'EURUSD',
  side: 'BUY',
  entry: 1.1,
  stopLoss: 1.09,
  takeProfit: 1.12,
  accountEquity: 10_000,
  riskFraction: 0.01,
  pointValuePerUnit: 1,
};

describe('buildTradePlan', () => {
  it('sizes a valid trade from the declared risk budget', () => {
    const plan = buildTradePlan(baseIntent, policy);

    expect(plan.riskAmount).toBe(100);
    expect(plan.stopDistance).toBe(0.01);
    expect(plan.rewardDistance).toBe(0.02);
    expect(plan.rewardToRisk).toBe(2);
    expect(plan.quantity).toBe(10_000);
    expect(plan.notional).toBe(11_000);
    expect(plan.leverage).toBe(1.1);
    expect(plan.approved).toBe(true);
    expect(plan.rejectionReasons).toEqual([]);
  });

  it('fails closed when the requested risk exceeds policy', () => {
    const plan = buildTradePlan({ ...baseIntent, riskFraction: 0.02 }, policy);

    expect(plan.approved).toBe(false);
    expect(plan.quantity).toBe(0);
    expect(plan.rejectionReasons).toContain('RISK_LIMIT_EXCEEDED');
  });

  it('rejects a stop placed on the profitable side of a buy entry', () => {
    const plan = buildTradePlan({ ...baseIntent, stopLoss: 1.11 }, policy);

    expect(plan.approved).toBe(false);
    expect(plan.rejectionReasons).toContain('STOP_MUST_BE_BEYOND_ENTRY_AGAINST_TRADE');
  });

  it('handles sell-side geometry without duplicating formulas', () => {
    const plan = buildTradePlan(
      {
        ...baseIntent,
        side: 'SELL',
        entry: 100,
        stopLoss: 102,
        takeProfit: 96,
        pointValuePerUnit: 1,
      },
      policy,
    );

    expect(plan.stopDistance).toBe(2);
    expect(plan.rewardDistance).toBe(4);
    expect(plan.rewardToRisk).toBe(2);
    expect(plan.approved).toBe(true);
  });

  it('rejects plans whose reward-to-risk is below policy', () => {
    const plan = buildTradePlan({ ...baseIntent, takeProfit: 1.115 }, policy);

    expect(plan.approved).toBe(false);
    expect(plan.rejectionReasons).toContain('REWARD_TO_RISK_BELOW_POLICY');
  });

  it('throws on non-finite financial inputs rather than propagating NaN', () => {
    expect(() =>
      buildTradePlan({ ...baseIntent, accountEquity: Number.NaN }, policy),
    ).toThrow(RiskInputError);
  });
});
