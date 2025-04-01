import { z } from "zod"

export const toolName = `check_users_saved_episodes`
export const toolDescription = `Check User's Saved Episodes`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/episodes/contains`
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
    "q_ids"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}

export const inputParams = z.object({ "q_ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the episodes. Maximum: 50 IDs.\n") }).shape