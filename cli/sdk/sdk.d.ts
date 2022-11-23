import { JsonRpcProvider, TxnDataSerializer } from '@mysten/sui.js';
import { NetworkConfiguration } from '../config/configuration';
import { SuiModule, TweetModule, ProfileModule } from '../modules';
export declare class SDK {
    protected _jsonRpcProvider: JsonRpcProvider;
    protected _networkConfiguration: NetworkConfiguration;
    protected _serializer: TxnDataSerializer;
    protected _sui: SuiModule;
    protected _profile: ProfileModule;
    protected _tweet: TweetModule;
    get jsonRpcProvider(): JsonRpcProvider;
    get networkOptions(): NetworkConfiguration;
    get serializer(): TxnDataSerializer;
    get Sui(): SuiModule;
    get Profile(): ProfileModule;
    get Tweet(): TweetModule;
    constructor(networkConfiguration: NetworkConfiguration);
}
//# sourceMappingURL=sdk.d.ts.map