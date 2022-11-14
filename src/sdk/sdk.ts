import { JsonRpcProvider, RpcTxnDataSerializer, TxnDataSerializer} from '@mysten/sui.js';
import { NetworkConfiguration } from '../config/configuration';

export class SDK {
    protected _jsonRpcProvider: JsonRpcProvider;
    protected _networkConfiguration: NetworkConfiguration;
    protected _serializer: TxnDataSerializer;

    get jsonRpcProvider() {
        return this._jsonRpcProvider;
    }

    get networkOptions() {
        return this._networkConfiguration;
    }

    get serializer() {
        return this._serializer;
    }

    constructor(networkConfiguration:NetworkConfiguration) {
        this._jsonRpcProvider = new JsonRpcProvider(networkConfiguration.fullNodeUrl)
        this._serializer = new RpcTxnDataSerializer(this._jsonRpcProvider.endpoints.fullNode, 
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this._jsonRpcProvider.options.skipDataValidation!)
        this._networkConfiguration = networkConfiguration;
    }
}