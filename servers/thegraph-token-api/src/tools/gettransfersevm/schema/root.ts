import { z } from "zod"

export const inputParamsSchema = {
  "network_id": z.enum(["mainnet","bsc","base","arbitrum-one","optimism","matic","unichain"]).describe("The Graph Network ID https://thegraph.com/networks").optional(),
  "from": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("Filter by address").optional(),
  "to": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("Filter by address").optional(),
  "contract": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("Filter by address").optional(),
  "startTime": z.number().gte(0).describe("UNIX timestamp in seconds.").optional(),
  "endTime": z.number().gte(0).describe("UNIX timestamp in seconds.").optional(),
  "orderBy": z.literal("timestamp").describe("The field by which to order the results.").optional(),
  "orderDirection": z.enum(["asc","desc"]).describe("The order in which to return the results: Ascending (asc) or Descending (desc).").optional(),
  "transaction_id": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{64}$")).describe("Filter by transaction").optional(),
  "limit": z.number().int().gte(1).lte(1000).describe("The maximum number of items returned in a single request.").optional(),
  "page": z.number().int().gte(1).describe("The page number of the results to return.").optional()
}