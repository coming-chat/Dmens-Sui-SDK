import { MoveCallTransaction } from '@mysten/sui.js';
import { IModule } from '../interfaces/IModule';
import { SDK } from '../sdk';

export type UserProfile = {
  name: string,
  avatar: string,
  bio: string,
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
      const globalId = this.sdk.networkOptions.globalId;

      const txn:MoveCallTransaction = {
        packageObjectId: packageObjectId,
        module: 'profile',
        function: 'update_profile',
        arguments: [globalId, JSON.stringify(profile), ""],
        typeArguments: [],
        gasBudget: 30000,
      }
      return txn;
    }
    
}