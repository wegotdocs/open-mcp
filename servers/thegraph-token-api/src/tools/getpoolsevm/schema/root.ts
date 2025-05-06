import { z } from "zod"

export const inputParamsSchema = {
  "network_id": z.enum(["mainnet","bsc","base","arbitrum-one","optimism","matic","unichain"]).describe("The Graph Network ID https://thegraph.com/networks").optional(),
  "pool": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("Filter by contract address").optional(),
  "factory": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("Filter by address").optional(),
  "token": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("Filter by address").optional(),
  "symbol": z.string().optional(),
  "protocol": z.enum(["uniswap_v2","uniswap_v3"]).describe("Protocol name").optional()
}