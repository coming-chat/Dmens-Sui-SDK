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
    '0xfbcbf52e77f60d1bf7bce21e4e3c5cb1dba3a902',
    '0xfa75aebd9ea5d16d4dc17830864ed548e4d1bd16',
  );

  export const CONFIGS = {
    mainnet: MAINNET_CONFIG,
    testnet: TESTNET_CONFIG,
    devnet: DEVNET_CONFIG
  };
  