import { z } from "zod"

export const inputParamsSchema = {
  "before": z.string().describe("Unix timestamp in milliseconds. Returns only transactions created before the specified date.\nProvides an explicit end time. If not provided, default value will be applied, and may change over time. \nThe current default value is the past 90 days.\n").optional(),
  "after": z.string().describe("Unix timestamp in milliseconds. Returns only transactions created after the specified date.\nProvides an explicit start time. If not provided, default value will be applied, and may change over time. \nThe current default value is the past 90 days.\n").optional(),
  "status": z.enum(["SUBMITTED","PENDING_AML_SCREENING","PENDING_ENRICHMENT","PENDING_AUTHORIZATION","QUEUED","PENDING_SIGNATURE","PENDING_3RD_PARTY_MANUAL_APPROVAL","PENDING_3RD_PARTY","BROADCASTING","COMPLETED","CONFIRMING","CANCELLING","CANCELLED","BLOCKED","REJECTED","FAILED"]).describe("The primary status of the transaction. \nFor details, see [Primary transaction statuses](https://developers.fireblocks.com/reference/primary-transaction-statuses)\n").optional(),
  "orderBy": z.enum(["createdAt","lastUpdated"]).describe("The field to order the results by\n\n**Note**: Ordering by a field that is not createdAt may result with transactions that receive updates as you request the next or previous pages of results, resulting with missing those transactions.").optional(),
  "sort": z.enum(["ASC","DESC"]).describe("The direction to order the results by").optional(),
  "limit": z.number().int().gte(1).describe("Limits the number of results. If not provided, a limit of 200 will be used. The maximum allowed limit is 500").optional(),
  "sourceType": z.enum(["VAULT_ACCOUNT","EXCHANGE_ACCOUNT","INTERNAL_WALLET","EXTERNAL_WALLET","CONTRACT","FIAT_ACCOUNT","NETWORK_CONNECTION","COMPOUND","UNKNOWN","GAS_STATION","END_USER_WALLET"]).describe("The source type of the transaction").optional(),
  "sourceId": z.string().describe("The source ID of the transaction").optional(),
  "destType": z.enum(["VAULT_ACCOUNT","EXCHANGE_ACCOUNT","INTERNAL_WALLET","EXTERNAL_WALLET","CONTRACT","FIAT_ACCOUNT","NETWORK_CONNECTION","COMPOUND","ONE_TIME_ADDRESS","END_USER_WALLET","MULTI_DESTINATION"]).describe("The destination type of the transaction").optional(),
  "destId": z.string().describe("The destination ID of the transaction").optional(),
  "assets": z.string().describe("A list of assets to filter by, seperated by commas").optional(),
  "txHash": z.string().describe("Returns only results with a specified txHash").optional(),
  "sourceWalletId": z.string().describe("Returns only results where the source is a specific end user wallet").optional(),
  "destWalletId": z.string().describe("Returns only results where the destination is a specific end user wallet").optional()
}