import { z } from "zod"

export const toolName = `gettransfersevmbyaddress`
export const toolDescription = `Token Transfers by Wallet Address`
export const baseUrl = `https://token-api.thegraph.com`
export const path = `/transfers/evm/{address}`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "path": z.object({ "address": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("EVM wallet address to query") }).optional(), "query": z.object({ "network_id": z.enum(["mainnet","bsc","base","arbitrum-one","optimism","matic"]).describe("The Graph Network ID https://thegraph.com/networks").optional(), "age": z.number().int().gte(1).lte(180).describe("Indicates how many days have passed since the data's creation or insertion."), "contract": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("Filter by contract address").optional(), "limit": z.number().int().gte(1).lte(500).describe("The maximum number of items returned in a single request."), "page": z.number().int().gte(1).describe("The page number of the results to return.") }).optional() }).shape