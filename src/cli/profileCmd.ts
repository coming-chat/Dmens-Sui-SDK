import { getTransactionEffects } from '@mysten/sui.js';
import { readConfig } from './readConfig';
import { Command } from 'commander';

export const updateprofileCmd = async (
    program: Command
) => {
    const updateProfile = async(
        userAddress: string,
        profile: string,
    ) => {
        const { dmensSdk, rawSigner } = readConfig(program);

        const profileJSon =  JSON.parse(profile);
        // const profileParams = {
        //     userName: 'qinghuan',
        //     userWalletAddress: '0xc05eaaf1369ece51ce0b8ad5cb797b737d4f2eba',
        //     userProfileUrl: 'http://aaa.com',
        //     userBio: 'bio',
        //     userCid: '888'
        // }
        console.log(`-------------post tweet-------------`)
        const postTweetTxn = dmensSdk.Profile.buildUpdateProfileTransaction(userAddress, profileJSon);
        const address = await rawSigner.getAddress();
        console.log(`address: 0x${address}`)
        const executeResponse = await rawSigner.executeMoveCallWithRequestType(postTweetTxn,'WaitForEffectsCert')
        const response = getTransactionEffects(executeResponse)
        console.log(`excute status: ${response?.status.status} digest: ${response?.transactionDigest} `)
    };

    program
    .command('dmens:update-profile')
    .description('Update User profile')
    .argument('<address>')
    .argument('<profile>')
    .action(updateProfile)
}

export const adminProfileCmd = async (
    program: Command
) => {
    const updateProfile = async(
        userAddress: string,
    ) => {
        const { dmensSdk, rawSigner } = readConfig(program);
        console.log(`-------------post tweet-------------`)
        const postTweetTxn = dmensSdk.Profile.buildUpdateAdminTransaction(userAddress);
        const address = await rawSigner.getAddress();
        console.log(`address: 0x${address}`)
        const executeResponse = await rawSigner.executeMoveCallWithRequestType(postTweetTxn,'WaitForEffectsCert')
        const response = getTransactionEffects(executeResponse)
        console.log(`excute status: ${response?.status.status} digest: ${response?.transactionDigest} `)
    };

    program
    .command('dmens:update-profile-admin')
    .description('Update User profile')
    .argument('<address>')
    .action(updateProfile)
}
