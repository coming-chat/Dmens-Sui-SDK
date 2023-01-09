import { SDK, CONFIGS } from "./main"

describe("Dmens Module", ()=>{
    const sdk = new SDK(CONFIGS.devnet)

    const fetchMyNft = async ()=> {
        const objectList = await sdk.jsonRpcProvider.getObjectsOwnedByAddress(
            "0x055c9bb0fcfc922633d9cead1f3c85cbf357e4d6"
        );
        const cappyObjects = objectList.filter(object => {
           return object.type.includes("capy::Capy")
        });
      
        const cappyInfoList = await Promise.all(
            cappyObjects.map(object => {
               return sdk.jsonRpcProvider.getObject(object.objectId)
           })
        );
        return cappyInfoList;
    };

    test('get users nft', async()=>{
        const capyInfoList = await fetchMyNft();
        console.log(capyInfoList)
        expect(typeof capyInfoList).toBe('object');
    })
   
})