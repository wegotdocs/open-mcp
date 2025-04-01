import { z } from "zod"

export const toolName = `get_users_top_tracks`
export const toolDescription = `Get User's Top Tracks`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/top/tracks`
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
    "q_time_range",
    "q_limit",
    "q_offset"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {
  "q_time_range": "time_range",
  "q_limit": "limit",
  "q_offset": "offset"
}

export const inputParams = z.object({ "q_time_range": z.string().describe("Over what time frame the affinities are computed. Valid values: `long_term` (calculated from ~1 year of data and including all new data as it becomes available), `medium_term` (approximately last 6 months), `short_term` (approximately last 4 weeks). Default: `medium_term`\n"), "q_limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n"), "q_offset": z.number().int().describe("The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n") }).shape