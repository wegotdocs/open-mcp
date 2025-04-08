import { z } from "zod"

export const toolName = `getauthtoken`
export const toolDescription = `Get Auth Token Metadata`
export const baseUrl = `https://api.vercel.com`
export const path = `/v5/user/tokens/{tokenId}`
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
  "query": [],
  "header": [],
  "path": [
    "tokenId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "tokenId": z.string().describe("The identifier of the token to retrieve. The special value \\\"current\\\" may be supplied, which returns the metadata for the token that the current HTTP request is authenticated with.")
}