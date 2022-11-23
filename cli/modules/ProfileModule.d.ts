import { MoveCallTransaction } from '@mysten/sui.js';
import { IModule } from '../interfaces/IModule';
import { SDK } from '../sdk';
export declare type UserProfile = {
    userName: string;
    userWalletAddress: string;
    userProfileUrl: string;
    userBio: string;
    userCid: string;
};
export declare class ProfileModule implements IModule {
    protected _sdk: SDK;
    get sdk(): SDK;
    constructor(sdk: SDK);
    buildUpdateAdminTransaction(address: string): MoveCallTransaction;
    buildUpdateProfileTransaction(address: string, profile: UserProfile): MoveCallTransaction;
}
//# sourceMappingURL=ProfileModule.d.ts.map