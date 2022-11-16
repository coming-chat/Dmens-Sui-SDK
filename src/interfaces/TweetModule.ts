import { MoveCallTransaction } from '@mysten/sui.js';
import { IModule } from '../interfaces/IModule';
import { SDK } from '../sdk';

export type PostTweetParams = {
  app_id: number,
  action: number
  text: string,
}

export type PostTweetRefParams = {
  app_id: number,
  action: number,
  text: string,
  ref_identifier: string,
}

export class TweetModule implements IModule {
    protected _sdk: SDK;
    
    get sdk() {
      return this._sdk;
    }
    
    constructor(sdk: SDK) {
      this._sdk = sdk;
    } 

    buildPostTweetTransaction(params: PostTweetParams, gasPayment: string): MoveCallTransaction {
      const packageObjectId = this.sdk.networkOptions.packageObjectId;
      const txn:MoveCallTransaction = {
        packageObjectId: packageObjectId,
        module: 'dmens',
        function: 'post',
        arguments: [params.app_id,params.action,params.text],
        typeArguments: [],
        gasPayment: gasPayment,
        gasBudget: 10000,
      }
      return txn;
    }

    buildPostTweetWithRefTransaction(params: PostTweetRefParams, gasPayment: string): MoveCallTransaction {
      const packageObjectId = this.sdk.networkOptions.packageObjectId;
      const txn:MoveCallTransaction = {
        packageObjectId: packageObjectId,
        module: 'dmens',
        function: 'post',
        arguments: [params.app_id,params.action,params.text,params.ref_identifier],
        typeArguments: [],
        gasPayment: gasPayment,
        gasBudget: 10000,
      }
      return txn;
    }

}