import { z } from "zod"

export const toolName = `get_users_saved_shows`
export const toolDescription = `Get User's Saved Shows`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/shows`
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
    "q_limit",
    "q_offset"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}

export const inputParams = z.object({ "q_limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n"), "q_offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n") }).shape