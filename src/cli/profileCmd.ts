import { getTransactionEffects } from '@mysten/sui.js';
import { readConfig } from './readConfig';
import { Command } from 'commander';

export const updateprofileCmd = async (
    program: Command
) => {
    const updateProfile = async(
        profile: string,
    ) => {
        const { dmensSdk, rawSigner } = readConfig(program);

        const profileJSon =  JSON.parse(profile);

        console.log(`-------------post tweet-------------`)
        const postProfileTxn = dmensSdk.Profile.buildUpdateProfileTransaction(profileJSon);
        const address = await rawSigner.getAddress();
        console.log(`address: 0x${address}`)
        const executeResponse = await rawSigner.executeMoveCallWithRequestType(postProfileTxn,'WaitForEffectsCert')
        const response = getTransactionEffects(executeResponse)
        console.log(`excute status: ${response?.status.status} digest: ${response?.transactionDigest} `)
    };

    program
    .command('dmens:update-profile')
    .description('Update User profile')
    .argument('<profile>')
    .action(updateProfile)
}
