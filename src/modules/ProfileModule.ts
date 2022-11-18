import {  MoveCallTransaction, bcs } from '@mysten/sui.js';
import { IModule } from '../interfaces/IModule';
import { SDK } from '../sdk';

export type UserProfile = {
  userName: string,
  userWalletAddress:string,
  userProfileUrl: string,
  userBio: string,
  userCid: string
};

export class ProfileModule implements IModule {
    protected _sdk: SDK;
    
    get sdk() {
      return this._sdk;
    }
    
    constructor(sdk: SDK) {
      this._sdk = sdk;
    } 

    buildUpdateProfileTransaction(profile:UserProfile): MoveCallTransaction {
      const packageObjectId = this.sdk.networkOptions.packageObjectId;
      const bcsType =  {
        userName: 'vector<u8>',
        userWalletAddress: 'vector<u8>',
        userProfileUrl: 'vector<u8>',
        userBio: 'vector<u8>',
        userCid: 'vector<u8>'
      };
      bcs.registerStructType('UserProfile',bcsType);
      const profileBcsSer = bcs.ser('UserProfile',profile).toString('base64');

      const txn:MoveCallTransaction = {
        packageObjectId: packageObjectId,
        module: 'dmens',
        function: 'post_with_ref',
        arguments: [profileBcsSer],
        typeArguments: [],
        gasBudget: 30000,
      }
      return txn;
    }
    
}