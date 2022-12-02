import { getTransactionEffects } from '@mysten/sui.js';
import { readConfig } from './readConfig';
import { Command } from 'commander';
import { TweetAction,AppId } from '../types';

export const postTweetCmd = async (
    program: Command
) => {
    const postTweet = async(
        appId: number,
        action: number,
        text: string
    ) => {
        const { dmensSdk, rawSigner } = readConfig(program);
        const params = {
            appId:  appId ? appId : AppId.APP_ID_FOR_COMINGCHAT_WEB,
            action: action ? action : TweetAction.ACTION_POST,
            text: text,
        }
        console.log(`-------------post tweet-------------`)
        const postTweetTxn = dmensSdk.Tweet.buildPostTweetTransaction(params);
        const address = await rawSigner.getAddress();
        console.log(`address: 0x${address}`)
        const executeResponse = await rawSigner.executeMoveCallWithRequestType(postTweetTxn,'WaitForEffectsCert')
        const response = getTransactionEffects(executeResponse)
        console.log(`excute status: ${response?.status.status} digest: ${response?.transactionDigest} `)
    };

    program
    .command('dmens:post-tweet')
    .description('Publish Tweet')
    .argument('<app_id>')
    .argument('<action>')
    .argument('<text>')
    .action(postTweet)
}

export const postTweetWithRrefCmd = async (
    program:Command
) => {
    
    const postTweetWithRref = async (
        appId: number,
        action: number,
        text: string,
        ref: string,
    ) => {
       const { dmensSdk, rawSigner } = readConfig(program);
       const params = {
        appId:  appId ? appId : AppId.APP_ID_FOR_COMINGCHAT_WEB,
        action: action ? action : TweetAction.ACTION_POST,
        text: text,
        refIdentifier: ref
       }
       console.log(`-------------post tweet with ref-------------`)
       const postTweetWithTxn = dmensSdk.Tweet.buildPostTweetWithRefTransaction(params);
       const address = await rawSigner.getAddress();
       console.log(`address: 0x${address}`)
       const executeResponse = await rawSigner.executeMoveCallWithRequestType(postTweetWithTxn,'WaitForEffectsCert')
       const response = getTransactionEffects(executeResponse)
       console.log(`excute status: ${response?.status.status} digest: ${response?.transactionDigest} `)
    }
    
    program
        .command('dmens:post-tweet-with-ref')
        .description('Publish Tweet')
        .argument('<app_id>')
        .argument('<action>')
        .argument('<text>')
        .argument('<ref>')
        .action(postTweetWithRref)
}

export const followSomeoneCmd = async (
    program:Command
) => {
    
    const followSomeone = async (
        account: string,
        to_follow: boolean,
    ) => {
       const { dmensSdk, rawSigner } = readConfig(program);
       const params = {
        account: account,
        toFollow: to_follow
       }
       console.log(`-------------post tweet with ref-------------`)
       const followWithTxn = dmensSdk.Tweet.buildFollowTransaction(params);
       const address = await rawSigner.getAddress();
       console.log(`address: 0x${address}`)
       const executeResponse = await rawSigner.executeMoveCallWithRequestType(followWithTxn,'WaitForEffectsCert')
       const response = getTransactionEffects(executeResponse)
       console.log(`excute status: ${response?.status.status} digest: ${response?.transactionDigest} `)
    }
    
    program
        .command('dmens:follow')
        .description('Publish Tweet')
        .argument('<address>')
        .argument('<to_follow>')
        .action(followSomeone)
}