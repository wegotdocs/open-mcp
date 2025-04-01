import { z } from "zod"

export const toolName = `remove_audiobooks_user`
export const toolDescription = `Remove User's Saved Audiobooks`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/audiobooks`
export const method = `delete`
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

export const inputParams = z.object({ "q_ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.\n") }).shape