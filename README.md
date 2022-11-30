## Dmens-Sui-SDK
The typescript SDK for Dmens Protocol.
>Dmens is a reduction of "Decentralize Momments", building a blockchain Twitter protocol on the Sui network, and integrating it in ComingChat in the form of a product similar to WeChat Moments.

### DMens Contract On Sui-Nami Network
|         | PackageId                                  | globalId                                   |
| ------- | ------------------------------------------ | ------------------------------------------ |
| Devnet  | 0x1c0a7b8073f8b2e654ff3d217fb276d0e95dda44 | 0x0d8a4050d7b27d08adb20be4ff6af1130b8ca95a |
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

### Update Profile (Only Admin)
```
yarn cli -c ~/.sui/sui_config dmens:update-profile "0xc05eaaf1369ece51ce0b8ad5cb797b737d4f2eba" "{\"userName\":\"test\",\"userWalletAddress\":\"0xc05eaaf1369ece51ce0b8ad5cb797b737d4f2eba\",\"userProfileUrl\":\"http://aaa.com\",\"userBio\":\"bio\",\"userCid\":\"888\"}"
```
