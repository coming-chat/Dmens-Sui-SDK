import { JsonRpcProvider, RpcTxnDataSerializer, TxnDataSerializer} from '@mysten/sui.js';
import { NetworkConfiguration } from '../config/configuration';
import { SuiModule,TweetModule,ProfileModule } from '../modules'

export class SDK {
    protected _jsonRpcProvider: JsonRpcProvider;
    protected _networkConfiguration: NetworkConfiguration;
    protected _serializer: TxnDataSerializer;
    protected _sui: SuiModule;
    protected _profile:ProfileModule;
    protected _tweet: TweetModule;

    get jsonRpcProvider() {
        return this._jsonRpcProvider;
    }

    get networkOptions() {
        return this._networkConfiguration;
    }

    get serializer() {
        return this._serializer;
    }

    get Sui() {
        return this._sui;
    }

    get Profile() {
        return this._profile;
    }

    get Tweet() {
        return this._tweet;
    }

    constructor(networkConfiguration:NetworkConfiguration) {
        this._jsonRpcProvider = new JsonRpcProvider(networkConfiguration.fullNodeUrl)
        this._serializer = new RpcTxnDataSerializer(this._jsonRpcProvider.endpoints.fullNode, 
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this._jsonRpcProvider.options.skipDataValidation!)
        this._networkConfiguration = networkConfiguration;
        this._sui = new SuiModule(this);
        this._profile = new ProfileModule(this);
        this._tweet = new TweetModule(this);
    }
}