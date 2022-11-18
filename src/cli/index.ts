import { initProgram } from './option';
import { readConfig } from './readConfig';
import { TweetAction,AppId } from '../types';
import { getTransactionEffects } from '@mysten/sui.js';

const program = initProgram();

const postTweet = async (
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
}

program
    .command('dmens:post-tweet')
    .description('Publish Tweet')
    .argument('<app_id>')
    .argument('<action>')
    .argument('<text>')
    .action(postTweet)

program.parse();