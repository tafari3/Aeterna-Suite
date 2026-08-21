import {
  RiskInputError,
  type RiskPolicy,
  type TradeIntent,
  type TradePlan,
} from './domain.js';

const round = (value: number, decimals = 8): number => {
  const factor = 10 ** decimals;
  return Math.round((value + Number.EPSILON) * factor) / factor;
};

const requireFinitePositive = (name: string, value: number): void => {
  if (!Number.isFinite(value) || value <= 0) {
    throw new RiskInputError(`${name} must be a finite positive number`);
  }
};

export function buildTradePlan(intent: TradeIntent, policy: RiskPolicy): TradePlan {
  requireFinitePositive('entry', intent.entry);
  requireFinitePositive('stopLoss', intent.stopLoss);
  requireFinitePositive('takeProfit', intent.takeProfit);
  requireFinitePositive('accountEquity', intent.accountEquity);
  requireFinitePositive('pointValuePerUnit', intent.pointValuePerUnit);
  requireFinitePositive('riskFraction', intent.riskFraction);
  requireFinitePositive('maxRiskFraction', policy.maxRiskFraction);
  requireFinitePositive('minRewardToRisk', policy.minRewardToRisk);
  requireFinitePositive('maxNotionalLeverage', policy.maxNotionalLeverage);

  const direction = intent.side === 'BUY' ? 1 : -1;
  const stopDistance = (intent.entry - intent.stopLoss) * direction;
  const rewardDistance = (intent.takeProfit - intent.entry) * direction;

  const rejectionReasons: string[] = [];

  if (stopDistance <= 0) {
    rejectionReasons.push('STOP_MUST_BE_BEYOND_ENTRY_AGAINST_TRADE');
  }
  if (rewardDistance <= 0) {
    rejectionReasons.push('TARGET_MUST_BE_BEYOND_ENTRY_WITH_TRADE');
  }
  if (intent.riskFraction > policy.maxRiskFraction) {
    rejectionReasons.push('RISK_LIMIT_EXCEEDED');
  }

  if (rejectionReasons.length > 0) {
    return {
      symbol: intent.symbol,
      side: intent.side,
      riskAmount: round(intent.accountEquity * intent.riskFraction),
      stopDistance: round(Math.max(stopDistance, 0)),
      rewardDistance: round(Math.max(rewardDistance, 0)),
      rewardToRisk: 0,
      quantity: 0,
      notional: 0,
      leverage: 0,
      approved: false,
      rejectionReasons,
    };
  }

  const riskAmount = intent.accountEquity * intent.riskFraction;
  const riskPerUnit = stopDistance * intent.pointValuePerUnit;
  const quantity = riskAmount / riskPerUnit;
  const notional = quantity * intent.entry;
  const leverage = notional / intent.accountEquity;
  const rewardToRisk = rewardDistance / stopDistance;

  if (rewardToRisk < policy.minRewardToRisk) {
    rejectionReasons.push('REWARD_TO_RISK_BELOW_POLICY');
  }
  if (leverage > policy.maxNotionalLeverage) {
    rejectionReasons.push('NOTIONAL_LEVERAGE_EXCEEDED');
  }

  return {
    symbol: intent.symbol,
    side: intent.side,
    riskAmount: round(riskAmount),
    stopDistance: round(stopDistance),
    rewardDistance: round(rewardDistance),
    rewardToRisk: round(rewardToRisk),
    quantity: round(quantity),
    notional: round(notional),
    leverage: round(leverage),
    approved: rejectionReasons.length === 0,
    rejectionReasons,
  };
}
