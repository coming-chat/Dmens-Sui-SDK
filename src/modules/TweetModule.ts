import {  MoveCallTransaction } from '@mysten/sui.js';
import { IModule, DEFAULT_GAS_BUDGET_FOR_MOVE_EXECUTE } from '../interfaces/IModule';
import { SDK } from '../sdk';

export type PostTweetParams = {
  appId: number,
  action: number
  text: string,
  gasPayment?:string,
  gasBudget?: number
}

export type PostTweetRefParams = {
  appId: number,
  action: number,
  text: string,
  refIdentifier: string,
  gasPayment?:string,
  gasBudget?: number
}

export type FollowParams = {
  account: string,
  toFollow: boolean,
  gasPayment?:string,
  gasBudget?: number
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
  
      const txn: MoveCallTransaction = {
        packageObjectId: packageObjectId,
        module: 'dmens',
        function: 'post',
        arguments: [params.appId, params.action, params.text],
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
        function: 'post_with_ref',
        arguments: [params.appId,params.action,params.text,params.refIdentifier],
        typeArguments: [],
        gasPayment: params.gasPayment,
        gasBudget: params.gasBudget ? params.gasBudget : DEFAULT_GAS_BUDGET_FOR_MOVE_EXECUTE,
      }
      return txn;
    }

    buildFollowTransaction(params: FollowParams): MoveCallTransaction {
      const packageObjectId = this.sdk.networkOptions.packageObjectId;
      const txn:MoveCallTransaction = {
        packageObjectId: packageObjectId,
        module: 'dmens',
        function: 'follow',
        arguments: [params.account,params.toFollow],
        typeArguments: [],
        gasPayment: params.gasPayment,
        gasBudget: params.gasBudget ? params.gasBudget : DEFAULT_GAS_BUDGET_FOR_MOVE_EXECUTE,
      }
      return txn;
    }

}