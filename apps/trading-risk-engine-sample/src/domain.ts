export type Side = 'BUY' | 'SELL';

export interface TradeIntent {
  symbol: string;
  side: Side;
  entry: number;
  stopLoss: number;
  takeProfit: number;
  accountEquity: number;
  riskFraction: number;
  pointValuePerUnit: number;
}

export interface RiskPolicy {
  maxRiskFraction: number;
  minRewardToRisk: number;
  maxNotionalLeverage: number;
}

export interface TradePlan {
  symbol: string;
  side: Side;
  riskAmount: number;
  stopDistance: number;
  rewardDistance: number;
  rewardToRisk: number;
  quantity: number;
  notional: number;
  leverage: number;
  approved: boolean;
  rejectionReasons: string[];
}

export class RiskInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RiskInputError';
  }
}
