//import { ObjectId, Coin as CoinAPI, getObjectId } from '@mysten/sui.js';
import { IModule, DEFAULT_GAS_BUDGET_FOR_MOVE_EXECUTE } from '../interfaces/IModule';
import { SDK } from '../sdk';

export class SuiModule implements IModule {
    protected _sdk: SDK;
    
    get sdk() {
      return this._sdk;
    }
    
    constructor(sdk: SDK) {
      this._sdk = sdk;
    } 

    computeGasCostForPay(numInputCoins: number): number {
        // TODO: improve the gas budget estimation
        return (
            DEFAULT_GAS_BUDGET_FOR_MOVE_EXECUTE *
            Math.max(2, Math.min(100, numInputCoins / 2))
        );
    }        
}