import { IModule } from '../interfaces/IModule';
import { SDK } from '../sdk';
export declare class SuiModule implements IModule {
    protected _sdk: SDK;
    get sdk(): SDK;
    constructor(sdk: SDK);
    computeGasCostForPay(numInputCoins: number): number;
}
//# sourceMappingURL=SuiModule.d.ts.map