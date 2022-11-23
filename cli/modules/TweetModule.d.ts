import { MoveCallTransaction } from '@mysten/sui.js';
import { IModule } from '../interfaces/IModule';
import { SDK } from '../sdk';
export declare type PostTweetParams = {
    appId: number;
    action: number;
    text: string;
    gasPayment?: string;
    gasBudget?: number;
};
export declare type PostTweetRefParams = {
    appId: number;
    action: number;
    text: string;
    refIdentifier: string;
    gasPayment?: string;
    gasBudget?: number;
};
export declare class TweetModule implements IModule {
    protected _sdk: SDK;
    get sdk(): SDK;
    constructor(sdk: SDK);
    buildPostTweetTransaction(params: PostTweetParams): MoveCallTransaction;
    buildPostTweetWithRefTransaction(params: PostTweetRefParams): MoveCallTransaction;
}
//# sourceMappingURL=TweetModule.d.ts.map