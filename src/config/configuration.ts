import {  Network  } from '@mysten/sui.js';

export class NetworkConfiguration {
    constructor(
      public name: string,
      public fullNodeUrl: string,
      public packageObjectId: string,
      public globalId: string,
      public isMainNet = false
    ) {}
  }
  
  export const MAINNET_CONFIG = new NetworkConfiguration(
    'mainnet',
    'https://fullnode.mainnet.sui.io:443',
    '',
    '',
  );
  
  export const TESTNET_CONFIG = new NetworkConfiguration(
    'testnet',
     'https://fullnode.testnet.sui.io:443',
     '0x7a3ff93380660c4fa3ea8df8de13acb2cadf7052',
     '0x69b38e9e2c17551d347ffbe49e5e8b0e24db78ad',
  );

  export const DEVNET_CONFIG = new NetworkConfiguration(
    'devnet',
    Network.DEVNET,
    '0x03ffb724b47ec4dcd86d21835d512363bd585ef7',
    '0xeebedcada9765dc66870843afcb75cf9fd4b72c9',
  );

  export const CONFIGS = {
    mainnet: MAINNET_CONFIG,
    testnet: TESTNET_CONFIG,
    devnet: DEVNET_CONFIG
  };
  