import { MoveCallTransaction } from '@mysten/sui.js';
import { IModule } from '../interfaces/IModule';
import { SDK } from '../sdk';
export declare type UserProfile = {
    name: string;
    avator: string;
    bio: string;
};
export declare class ProfileModule implements IModule {
    protected _sdk: SDK;
    get sdk(): SDK;
    constructor(sdk: SDK);
    buildUpdateProfileTransaction(profile: UserProfile): MoveCallTransaction;
}
//# sourceMappingURL=ProfileModule.d.ts.map