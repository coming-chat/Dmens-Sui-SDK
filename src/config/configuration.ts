export class DMensConfiguration {
  constructor(
    public name: string,
    public fullNodeUrl: string,
    public graphqlUrl: string,
    public packageObjectId: string,
    public globalId: string,
    public profileTableId: string,
    public isMainNet = false
  ) {}
}

export const MAINNET_CONFIG = new DMensConfiguration(
  'mainnet',
  'https://fullnode.mainnet.sui.io:443',
  '',
  '',
  '',
  ''
);

export const TESTNET_CONFIG = new DMensConfiguration(
  'testnet',
  'https://fullnode.testnet.sui.io:443',
  'https://graphql.coming.chat/sui-testnet/graphql',
  '0x7a3ff93380660c4fa3ea8df8de13acb2cadf7052',
  '0x69b38e9e2c17551d347ffbe49e5e8b0e24db78ad',
  ''
);

export const DEVNET_CONFIG = new DMensConfiguration(
  'devnet',
  'https://fullnode.devnet.sui.io:443',
  'https://graphql.coming.chat/sui-devnet/graphql',
  '0x2ac78d1e11aabe14a9b22a9d574ec10079bc10b0',
  '0x017deea93fadd50aec749bb41d3d746f4ac58b12',
  '0x4e316e794843e3f938e9da853b1f79ace162f732'
);

export const CONFIGS = {
  mainnet: MAINNET_CONFIG,
  testnet: TESTNET_CONFIG,
  devnet: DEVNET_CONFIG,
};
