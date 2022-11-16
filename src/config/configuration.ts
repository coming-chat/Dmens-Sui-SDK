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
    '0xa87667208ef2f1f857876a63d7e35148c0d00d14',
    '0x9fdf5cd0ec667d5ff59175ce49310522eddd6bda',
  );

  export const CONFIGS = {
    mainnet: MAINNET_CONFIG,
    testnet: TESTNET_CONFIG,
    devnet: DEVNET_CONFIG
  };
  