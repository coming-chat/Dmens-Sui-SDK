import { MoveCallTransaction } from '@mysten/sui.js';
import { IModule, DEFAULT_GAS_BUDGET_FOR_MOVE_EXECUTE } from '../interfaces/IModule';
import { SDK } from '../sdk';

export type PostTweetParams = {
  app_id: number,
  action: number
  text: string,
  gasPayment:string,
  gasBudget: number
}

export type PostTweetRefParams = {
  app_id: number,
  action: number,
  text: string,
  ref_identifier: string,
  gasPayment:string,
  gasBudget: number
}

export class TweetModule implements IModule {
    protected _sdk: SDK;
    
    get sdk() {
      return this._sdk;
    }
    
    constructor(sdk: SDK) {
      this._sdk = sdk;
    } 

    buildPostTweetTransaction(params: PostTweetParams): MoveCallTransaction {

      const packageObjectId = this.sdk.networkOptions.packageObjectId;
      const txn:MoveCallTransaction = {
        packageObjectId: packageObjectId,
        module: 'dmens',
        function: 'post',
        arguments: [params.app_id,params.action,params.text],
        typeArguments: [],
        gasPayment: params.gasPayment,
        gasBudget: params.gasBudget ? params.gasBudget : DEFAULT_GAS_BUDGET_FOR_MOVE_EXECUTE,
      }
      return txn;
    }

    buildPostTweetWithRefTransaction(params: PostTweetRefParams): MoveCallTransaction {
      const packageObjectId = this.sdk.networkOptions.packageObjectId;
      const txn:MoveCallTransaction = {
        packageObjectId: packageObjectId,
        module: 'dmens',
        function: 'post',
        arguments: [params.app_id,params.action,params.text,params.ref_identifier],
        typeArguments: [],
        gasPayment: params.gasPayment,
        gasBudget: params.gasBudget ? params.gasBudget : DEFAULT_GAS_BUDGET_FOR_MOVE_EXECUTE,
      }
      return txn;
    }

}