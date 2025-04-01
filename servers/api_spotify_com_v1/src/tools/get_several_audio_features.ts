import { z } from "zod"

export const toolName = `get_several_audio_features`
export const toolDescription = `Get Several Tracks' Audio Features`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/audio-features`
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
    "ids"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids)\nfor the tracks. Maximum: 100 IDs.\n") }).shape