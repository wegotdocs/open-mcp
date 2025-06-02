import { z } from "zod"

export const inputParamsSchema = {
  "pageCursor": z.string().describe("Cursor to the next page").optional(),
  "pageSize": z.number().gte(1).lte(50).describe("Amount of results to return in the next page").optional(),
  "sortBy": z.literal("createdAt").describe("Field(s) to use for sorting").optional(),
  "order": z.enum(["ASC","DESC"]).describe("Is the order ascending or descending").optional(),
  "vaultAccountId": z.number().describe("Return keys assigned to a specific vault").optional(),
  "agentUserId": z.string().describe("Return keys associated with a specific agent user").optional(),
  "algorithm": z.enum(["ECDSA_SECP256K1","EDDSA_ED25519"]).describe("Return only keys with a specific algorithm").optional(),
  "enabled": z.boolean().describe("Return keys that have been proof of ownership").optional(),
  "available": z.boolean().describe("Return keys that are proof of ownership but not assigned. Available filter can be used only when vaultAccountId and enabled filters are not set").optional()
}