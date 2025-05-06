import { z } from "zod"

export const inputParamsSchema = {
  "contract": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("Filter by contract address"),
  "network_id": z.enum(["mainnet","bsc","base","arbitrum-one","optimism","matic","unichain"]).describe("The Graph Network ID https://thegraph.com/networks").optional()
}