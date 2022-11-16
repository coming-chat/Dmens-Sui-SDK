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
     Network.DEVNET,
    '0x1f0d4d3ca884a1a6958fe5ba9dc6d8003d9f7d76',
    '0x92131c160fa0f1b95190a3a7cbfa32d0149ab00f',
  );
  
  export const TESTNET_CONFIG = new NetworkConfiguration(
    'testnet',
     'https://fullnode.testnet.sui.io:443',
    '0xc654deb390bbdd2ab0cdd935a17ef57351f77386',
    '0xed93ebb193b9cb6ba3c603c8f2ad58a606c1fb4f',
  );

  export const DEVNET_CONFIG = new NetworkConfiguration(
    'testnet',
     Network.DEVNET,
    '0xa87667208ef2f1f857876a63d7e35148c0d00d14',
    '0x9fdf5cd0ec667d5ff59175ce49310522eddd6bda',
  );

  export const CONFIGS = {
    mainnet: MAINNET_CONFIG,
    testnet: TESTNET_CONFIG,
    devnet: DEVNET_CONFIG
  };
  