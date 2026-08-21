# Trading Risk Engine Sample

A small, inspectable TypeScript sample focused on one problem that matters in supervised trading systems: turning a proposed trade into a deterministic, policy-gated risk plan.

This is intentionally not a broker client and it never submits orders. It demonstrates domain modelling, fail-closed validation, deterministic sizing logic and regression tests without exposing code from private commercial systems.

## What it demonstrates

- strict TypeScript domain types;
- deterministic position sizing from account equity and stop distance;
- BUY/SELL geometry handled through a shared calculation path;
- explicit risk, reward-to-risk and notional-leverage policies;
- fail-closed rejection reasons suitable for UI/API presentation;
- protection against invalid and non-finite financial inputs;
- Vitest regression coverage for valid and rejected plans.

## Run

```bash
npm install
npm run typecheck
npm test
```

## Example

```ts
const plan = buildTradePlan(
  {
    symbol: 'EURUSD',
    side: 'BUY',
    entry: 1.1,
    stopLoss: 1.09,
    takeProfit: 1.12,
    accountEquity: 10_000,
    riskFraction: 0.01,
    pointValuePerUnit: 1,
  },
  {
    maxRiskFraction: 0.01,
    minRewardToRisk: 2,
    maxNotionalLeverage: 5,
  },
);
```

For a valid plan the engine returns the risk amount, position quantity, notional exposure, leverage, reward-to-risk ratio and a policy decision. Invalid plans return zero executable quantity and explicit rejection reasons.

## Context

My larger trading, market-data and broker-integration work is maintained in private repositories because it contains commercial and account-sensitive implementation details. Architecture, test evidence and selected source can be reviewed under controlled conditions when appropriate.
