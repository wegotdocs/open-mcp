import { z } from "zod"

export const toolName = `get_recently_played`
export const toolDescription = `Get Recently Played Tracks`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/player/recently-played`
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
    "limit",
    "after",
    "before"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n"), "after": z.number().int().describe("A Unix timestamp in milliseconds. Returns all items\nafter (but not including) this cursor position. If `after` is specified, `before`\nmust not be specified.\n").optional(), "before": z.number().int().describe("A Unix timestamp in milliseconds. Returns all items\nbefore (but not including) this cursor position. If `before` is specified,\n`after` must not be specified.\n").optional() }).shape