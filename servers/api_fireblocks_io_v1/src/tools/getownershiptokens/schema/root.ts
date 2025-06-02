import { z } from "zod"

export const inputParamsSchema = {
  "blockchainDescriptor": z.enum(["ETH","ETH_TEST3","ETH_TEST5","ETH_TEST6","POLYGON","POLYGON_TEST_MUMBAI","AMOY_POLYGON_TEST","XTZ","XTZ_TEST","BASECHAIN_ETH","BASECHAIN_ETH_TEST3","BASECHAIN_ETH_TEST5","ETHERLINK","ETHERLINK_TEST","MANTLE","MANTLE_TEST","GUN_GUNZILLA_TEST","ETH_SONEIUM","SONEIUM_MINATO_TEST","IOTX_IOTEX"]).describe("Blockchain descriptor filter").optional(),
  "vaultAccountIds": z.string().describe("A comma separated list of Vault Account IDs. Up to 100 are allowed in a single request.  This field will be ignored when walletType=END_USER_WALLET or ncwId is provided.").optional(),
  "ncwId": z.string().describe("Non-Custodial Wallet ID").optional(),
  "ncwAccountIds": z.string().describe("A comma separated list of Non-Custodial account IDs. Up to 100 are allowed in a single request. This field will be ignored when walletType=VAULT_ACCOUNT or ncwId is not provided.").optional(),
  "walletType": z.enum(["VAULT_ACCOUNT","END_USER_WALLET"]).describe("Wallet type, it can be `VAULT_ACCOUNT` or `END_USER_WALLET`").optional(),
  "ids": z.string().describe("A comma separated list of NFT IDs. Up to 100 are allowed in a single request.").optional(),
  "collectionIds": z.string().describe("A comma separated list of collection IDs. Up to 100 are allowed in a single request.").optional(),
  "pageCursor": z.string().describe("Page cursor to fetch").optional(),
  "pageSize": z.number().gte(1).lte(100).describe("Items per page (max 100)").optional(),
  "sort": z.array(z.enum(["ownershipLastUpdateTime","name","collection.name","blockchainDescriptor"])).describe("Sort by param, it can be one param or a list of params separated by comma").optional(),
  "order": z.enum(["DESC","ASC"]).describe("Order direction, it can be `ASC` for ascending or `DESC` for descending").optional(),
  "status": z.enum(["LISTED","ARCHIVED"]).describe("Token ownership status").optional(),
  "search": z.string().describe("Search owned tokens and their collections. Possible criteria for search:  token name and id within the contract/collection, collection name, blockchain descriptor and name.").optional(),
  "spam": z.enum(["true","false","all"]).describe("Token ownership spam status.").optional()
}