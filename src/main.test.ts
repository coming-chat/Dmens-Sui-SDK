import { SuiObjectInfo } from "@mysten/sui.js"
import { SDK, CONFIGS } from "./main"

describe("Dmens Module", ()=>{
    const sdk = new SDK(CONFIGS.devnet)

    test('get users nft', async()=>{
        const objectList = await sdk.jsonRpcProvider.getObjectsOwnedByAddress("0x055c9bb0fcfc922633d9cead1f3c85cbf357e4d6")
        const capyList:SuiObjectInfo[] = [];
        objectList?.map(object => {
            if (object.type.includes("capy::Capy")) {
                capyList.push(object)
            }
        })
        console.log(capyList)
        for (const cappyItem of capyList) {
            const objectInfo = await sdk.jsonRpcProvider.getObject(cappyItem.objectId);
            console.log(objectInfo.details)
        }
        expect(typeof capyList).toBe('object');
    })
   
})