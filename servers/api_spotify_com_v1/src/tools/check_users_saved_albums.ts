import { z } from "zod"

export const toolName = `check_users_saved_albums`
export const toolDescription = `Check User's Saved Albums`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/albums/contains`
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

export const inputParams = z.object({ "query": z.object({ "ids": z.string().describe("A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.\n") }).optional() }).shape