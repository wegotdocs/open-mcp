import { z } from "zod"

export const toolName = `get_audio_analysis`
export const toolDescription = `Get Track's Audio Analysis`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/audio-analysis/{id}`
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
  "query": [],
  "header": [],
  "path": [
    "p_id"
  ],
  "cookie": [],
  "body": []
}

export const inputParams = z.object({ "p_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)\nfor the track.\n") }).shape