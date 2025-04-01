import { z } from "zod"

export const toolName = `get_followed`
export const toolDescription = `Get Followed Artists`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/following`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [
    "type",
    "after",
    "limit"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "type": z.literal("artist").describe("The ID type: currently only `artist` is supported.\n"), "after": z.string().describe("The last artist ID retrieved from the previous request.\n").optional(), "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n") }).shape