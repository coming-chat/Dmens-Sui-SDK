'use strict';

var commander = require('commander');
var Chaik = require('chalk');
var figlet = require('figlet');
var clear = require('clear');
var sui_js = require('@mysten/sui.js');
var bcs = require('@mysten/bcs');
var fs = require('fs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var commander__default = /*#__PURE__*/_interopDefaultLegacy(commander);
var Chaik__default = /*#__PURE__*/_interopDefaultLegacy(Chaik);
var figlet__default = /*#__PURE__*/_interopDefaultLegacy(figlet);
var clear__default = /*#__PURE__*/_interopDefaultLegacy(clear);
var fs__namespace = /*#__PURE__*/_interopNamespace(fs);

let program$1;
const initProgram = () => {
    program$1 = new commander__default["default"].Command();
    clear__default["default"]();
    console.log(Chaik__default["default"].red(figlet__default["default"].textSync('DMens-CLI', { horizontalLayout: 'full' })));
    program$1.description('DMens Sui TS CLI');
    program$1.requiredOption('-c, --config <path>', 'path to your sui config.yml (generated with "sui client active-address")');
    return program$1;
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

class ProfileModule {
    constructor(sdk) {
        this._sdk = sdk;
    }
    get sdk() {
        return this._sdk;
    }
    buildUpdateProfileTransaction(profile) {
        const packageObjectId = this.sdk.networkOptions.packageObjectId;
        const globalId = this.sdk.networkOptions.globalId;
        const txn = {
            packageObjectId: packageObjectId,
            module: 'profile',
            function: 'update_profile',
            arguments: [globalId, JSON.stringify(profile), "1111", ""],
            typeArguments: [],
            gasBudget: 30000,
        };
        return txn;
    }
}

const DEFAULT_GAS_BUDGET_FOR_MOVE_EXECUTE = 30000;

//import { ObjectId, Coin as CoinAPI, getObjectId } from '@mysten/sui.js';
class SuiModule {
    constructor(sdk) {
        this._sdk = sdk;
    }
    get sdk() {
        return this._sdk;
    }
    computeGasCostForPay(numInputCoins) {
        // TODO: improve the gas budget estimation
        return (DEFAULT_GAS_BUDGET_FOR_MOVE_EXECUTE *
            Math.max(2, Math.min(100, numInputCoins / 2)));
    }
}

class TweetModule {
    constructor(sdk) {
        this._sdk = sdk;
    }
    get sdk() {
        return this._sdk;
    }
    buildPostTweetTransaction(params) {
        const packageObjectId = this.sdk.networkOptions.packageObjectId;
        const txn = {
            packageObjectId: packageObjectId,
            module: 'dmens',
            function: 'post',
            arguments: [params.appId, params.action, params.text],
            typeArguments: [],
            gasPayment: params.gasPayment,
            gasBudget: params.gasBudget ? params.gasBudget : DEFAULT_GAS_BUDGET_FOR_MOVE_EXECUTE,
        };
        return txn;
    }
    buildPostTweetWithRefTransaction(params) {
        const packageObjectId = this.sdk.networkOptions.packageObjectId;
        const txn = {
            packageObjectId: packageObjectId,
            module: 'dmens',
            function: 'post_with_ref',
            arguments: [params.appId, params.action, params.text, params.refIdentifier],
            typeArguments: [],
            gasPayment: params.gasPayment,
            gasBudget: params.gasBudget ? params.gasBudget : DEFAULT_GAS_BUDGET_FOR_MOVE_EXECUTE,
        };
        return txn;
    }
}

class SDK {
    constructor(networkConfiguration) {
        this._jsonRpcProvider = new sui_js.JsonRpcProvider(networkConfiguration.fullNodeUrl);
        this._serializer = new sui_js.RpcTxnDataSerializer(this._jsonRpcProvider.endpoints.fullNode, 
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this._jsonRpcProvider.options.skipDataValidation);
        this._networkConfiguration = networkConfiguration;
        this._sui = new SuiModule(this);
        this._profile = new ProfileModule(this);
        this._tweet = new TweetModule(this);
    }
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
}

class NetworkConfiguration {
    constructor(name, fullNodeUrl, packageObjectId, globalId, isMainNet = false) {
        this.name = name;
        this.fullNodeUrl = fullNodeUrl;
        this.packageObjectId = packageObjectId;
        this.globalId = globalId;
        this.isMainNet = isMainNet;
    }
}
const MAINNET_CONFIG = new NetworkConfiguration('mainnet', 'https://fullnode.mainnet.sui.io:443', '', '');
const TESTNET_CONFIG = new NetworkConfiguration('testnet', 'https://fullnode.testnet.sui.io:443', '0x7a3ff93380660c4fa3ea8df8de13acb2cadf7052', '0x69b38e9e2c17551d347ffbe49e5e8b0e24db78ad');
const DEVNET_CONFIG = new NetworkConfiguration('devnet', sui_js.Network.DEVNET, '0x1c0a7b8073f8b2e654ff3d217fb276d0e95dda44', '0x0d8a4050d7b27d08adb20be4ff6af1130b8ca95a');
const CONFIGS = {
    mainnet: MAINNET_CONFIG,
    testnet: TESTNET_CONFIG,
    devnet: DEVNET_CONFIG
};

const readConfig = (program) => {
    const { config } = program.opts();
    const keystoreList = fs__namespace.readFileSync(config + "/sui.keystore", { encoding: 'utf-8' });
    // JSON.parse(keystoreList)[0];
    const decoded_array_buffer = bcs.fromB64(JSON.parse(keystoreList)[0]); // this UInt8Array
    // split the keys
    const decoded_array = Array.from(decoded_array_buffer);
    decoded_array.shift();
    const privatekey = Uint8Array.from(decoded_array.slice(32, 64));
    const keypair = sui_js.Ed25519Keypair.fromSeed(privatekey);
    const dmensSdk = new SDK(CONFIGS.devnet);
    const rawSigner = new sui_js.RawSigner(keypair, dmensSdk.jsonRpcProvider, dmensSdk.serializer);
    return { dmensSdk, rawSigner };
};

var TweetAction;
(function (TweetAction) {
    TweetAction[TweetAction["ACTION_POST"] = 0] = "ACTION_POST";
    TweetAction[TweetAction["ACTION_RETWEET"] = 1] = "ACTION_RETWEET";
    TweetAction[TweetAction["ACTION_QUOTE_TWEET"] = 2] = "ACTION_QUOTE_TWEET";
    TweetAction[TweetAction["ACTION_REPLY"] = 3] = "ACTION_REPLY";
    TweetAction[TweetAction["ACTION_ATTACH"] = 4] = "ACTION_ATTACH";
    TweetAction[TweetAction["ACTION_LIKE"] = 5] = "ACTION_LIKE";
})(TweetAction || (TweetAction = {}));
var AppId;
(function (AppId) {
    AppId[AppId["APP_ID_FOR_COMINGCHAT_APP"] = 0] = "APP_ID_FOR_COMINGCHAT_APP";
    AppId[AppId["APP_ID_FOR_COMINGCHAT_WEB"] = 1] = "APP_ID_FOR_COMINGCHAT_WEB";
})(AppId || (AppId = {}));

const postTweetCmd = (program) => __awaiter(void 0, void 0, void 0, function* () {
    const postTweet = (appId, action, text) => __awaiter(void 0, void 0, void 0, function* () {
        const { dmensSdk, rawSigner } = readConfig(program);
        const params = {
            appId: appId ? appId : AppId.APP_ID_FOR_COMINGCHAT_WEB,
            action: action ? action : TweetAction.ACTION_POST,
            text: text,
        };
        console.log(`-------------post tweet-------------`);
        const postTweetTxn = dmensSdk.Tweet.buildPostTweetTransaction(params);
        const address = yield rawSigner.getAddress();
        console.log(`address: 0x${address}`);
        const executeResponse = yield rawSigner.executeMoveCallWithRequestType(postTweetTxn, 'WaitForEffectsCert');
        const response = sui_js.getTransactionEffects(executeResponse);
        console.log(`excute status: ${response === null || response === void 0 ? void 0 : response.status.status} digest: ${response === null || response === void 0 ? void 0 : response.transactionDigest} `);
    });
    program
        .command('dmens:post-tweet')
        .description('Publish Tweet')
        .argument('<app_id>')
        .argument('<action>')
        .argument('<text>')
        .action(postTweet);
});
const postTweetWithRrefCmd = (program) => __awaiter(void 0, void 0, void 0, function* () {
    const postTweetWithRref = (appId, action, text, ref) => __awaiter(void 0, void 0, void 0, function* () {
        const { dmensSdk, rawSigner } = readConfig(program);
        const params = {
            appId: appId ? appId : AppId.APP_ID_FOR_COMINGCHAT_WEB,
            action: action ? action : TweetAction.ACTION_POST,
            text: text,
            refIdentifier: ref
        };
        console.log(`-------------post tweet with ref-------------`);
        const postTweetWithTxn = dmensSdk.Tweet.buildPostTweetWithRefTransaction(params);
        const address = yield rawSigner.getAddress();
        console.log(`address: 0x${address}`);
        const executeResponse = yield rawSigner.executeMoveCallWithRequestType(postTweetWithTxn, 'WaitForEffectsCert');
        const response = sui_js.getTransactionEffects(executeResponse);
        console.log(`excute status: ${response === null || response === void 0 ? void 0 : response.status.status} digest: ${response === null || response === void 0 ? void 0 : response.transactionDigest} `);
    });
    program
        .command('dmens:post-tweet-with-ref')
        .description('Publish Tweet')
        .argument('<app_id>')
        .argument('<action>')
        .argument('<text>')
        .argument('<ref>')
        .action(postTweetWithRref);
});

const updateprofileCmd = (program) => __awaiter(void 0, void 0, void 0, function* () {
    const updateProfile = (profile) => __awaiter(void 0, void 0, void 0, function* () {
        const { dmensSdk, rawSigner } = readConfig(program);
        const profileJSon = JSON.parse(profile);
        console.log(`-------------post tweet-------------`);
        const postProfileTxn = dmensSdk.Profile.buildUpdateProfileTransaction(profileJSon);
        const address = yield rawSigner.getAddress();
        console.log(`address: 0x${address}`);
        const executeResponse = yield rawSigner.executeMoveCallWithRequestType(postProfileTxn, 'WaitForEffectsCert');
        const response = sui_js.getTransactionEffects(executeResponse);
        console.log(`excute status: ${response === null || response === void 0 ? void 0 : response.status.status} digest: ${response === null || response === void 0 ? void 0 : response.transactionDigest} `);
    });
    program
        .command('dmens:update-profile')
        .description('Update User profile')
        .argument('<profile>')
        .action(updateProfile);
});

const program = initProgram();
postTweetCmd(program);
postTweetWithRrefCmd(program);
updateprofileCmd(program);
program.parse();
//# sourceMappingURL=index.js.map
