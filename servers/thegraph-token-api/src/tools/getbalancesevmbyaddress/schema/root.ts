import { z } from "zod"

export const inputParamsSchema = {
  "address": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("Filter by address"),
  "network_id": z.enum(["mainnet","bsc","base","arbitrum-one","optimism","matic","unichain"]).describe("The Graph Network ID https://thegraph.com/networks").optional(),
  "contract": z.string().optional(),
  "limit": z.number().int().gte(1).lte(1000).describe("The maximum number of items returned in a single request.").optional(),
  "page": z.number().int().gte(1).describe("The page number of the results to return.").optional()
}