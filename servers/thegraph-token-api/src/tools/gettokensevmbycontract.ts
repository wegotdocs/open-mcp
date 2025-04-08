import { z } from "zod"

export const toolName = `gettokensevmbycontract`
export const toolDescription = `Token Metadata by Contract`
export const baseUrl = `https://token-api.thegraph.com`
export const path = `/tokens/evm/{contract}`
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
export const keys = {
  "query": [
    "network_id"
  ],
  "header": [],
  "path": [
    "contract"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "contract": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("EVM contract address to query"),
  "network_id": z.enum(["mainnet","bsc","base","arbitrum-one","optimism","matic"]).describe("The Graph Network ID https://thegraph.com/networks").optional()
}