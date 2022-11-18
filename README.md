## Dmens-Sui-SDK
The typescript SDK for Dmens Protocol.
>Dmens is a reduction of "Decentralize Momments", building a blockchain Twitter protocol on the Sui network, and integrating it in ComingChat in the form of a product similar to WeChat Moments.

### DMens Contract On Sui-Nami Network
|         | PackageId                                  | globalId                                   |
| ------- | ------------------------------------------ | ------------------------------------------ |
| Devnet  | 0x5f8aeee082afcf39e9717135846d666b2e82c855 | 0x9b1406e525ad56e60f954e0144c9aade622923dc |
| Testnet | 0x7a3ff93380660c4fa3ea8df8de13acb2cadf7052 | 0x69b38e9e2c17551d347ffbe49e5e8b0e24db78ad |
| Mainnet |                                            |                                            |

## Usage

### Install
```
yarn add @omnibtc/dmens-sui-sdk
```

### CLI
```
yarn cli
  ____    __  __                                 ____   _       ___ 
 |  _ \  |  \/  |   ___   _ __    ___           / ___| | |     |_ _|
 | | | | | |\/| |  / _ \ | '_ \  / __|  _____  | |     | |      | | 
 | |_| | | |  | | |  __/ | | | | \__ \ |_____| | |___  | |___   | | 
 |____/  |_|  |_|  \___| |_| |_| |___/          \____| |_____| |___|
                                                                    
Usage: index [options] [command]

DMens Sui TS CLI

Options:
  -c, --config <path>                                       path to your sui config.yml (generated with "sui client active-address")
  -h, --help                                                display help for command

Commands:
  dmens:post-tweet <app_id> <action> <text>                 Publish Tweet
  dmens:post-tweet-with-ref <app_id> <action> <text> <ref>  Publish Tweet
  dmens:update-profile <address> <profile>                  Update User profile
  dmens:update-profile-admin <address>                      Update User profile
  help [command]                                            display help for command
```

### Post Tweet 

```
yarn cli -c ~/.sui/sui_config dmens:post-tweet 1 0  "hello,Dmens!"
```