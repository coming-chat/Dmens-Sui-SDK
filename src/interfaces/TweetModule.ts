import { IModule } from '../interfaces/IModule';
import { SDK } from '../sdk';

export class TweetModule implements IModule {
    protected _sdk: SDK;
    
    get sdk() {
      return this._sdk;
    }
    
    constructor(sdk: SDK) {
      this._sdk = sdk;
    } 
}