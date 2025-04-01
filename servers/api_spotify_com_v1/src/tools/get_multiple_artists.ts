import { z } from "zod"

export const toolName = `get_multiple_artists`
export const toolDescription = `Get Several Artists`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/artists`
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
export const flatMap = {
  "q_ids": "ids"
}

export const inputParams = z.object({ "q_ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the artists. Maximum: 50 IDs.\n") }).shape