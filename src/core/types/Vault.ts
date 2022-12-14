import { Apy } from '@types';

import { Address } from './Blockchain';
import { TokenView } from './Token';
import { PositionView } from './Position';
import { EarningsDayData, Usdc, StrategyMetadata } from './Yearn-Sdk';

export type VaultType = 'VAULT_V1' | 'VAULT_V2';

export interface VaultView extends PositionView, Omit<GeneralVaultView, 'DEPOSIT'> {}

export interface GeneralVaultView {
  address: Address;
  name: string;
  displayName: string;
  displayIcon: string;
  defaultDisplayToken: string;
  decimals: string;
  symbol: string;
  vaultBalance: string;
  vaultBalanceUsdc: string;
  depositLimit: string;
  emergencyShutdown: boolean;
  depositsDisabled: boolean;
  withdrawalsDisabled: boolean;
  hideIfNoDeposits: boolean;
  apyData: string;
  apyType: string;
  apyMetadata?: Apy;
  strategies: StrategyMetadata[];
  historicalEarnings: EarningsDayData[];
  earned: Usdc;
  allowancesMap: { [vaultAddress: string]: string };
  approved: boolean;
  pricePerShare: string;
  allowZapIn: boolean;
  allowZapOut: boolean;
  zapInWith?: string;
  zapOutWith?: string;
  migrationAvailable: boolean;
  migrationContract?: Address;
  migrationTargetVault?: Address;
  tags: VaultTags;
  token: TokenView;
  DEPOSIT: PositionView;
}

export interface VaultTags {
  isYearn?: boolean;
  isStable?: boolean;
  isCurve?: boolean;
  isBalancer?: boolean;
  isAutomated?: boolean;
}

export interface VaultDynamicData {
  address: Address;
  balance: string;
  balanceUsdc: string;
  apyData: any;
  depositLimit: string;
  pricePerShare: string;
  migrationAvailable: boolean;
  latestVaultAddress: string;
  emergencyShutdown: boolean;
}

export interface VaultRecommendation {
  tokenAddress: string;
  vaultAddress: string;
  apy: string;
  symbol: string;
}
export interface VaultsRecommendations {
  name: string;
  apy: string;
  symbol: string;
}
