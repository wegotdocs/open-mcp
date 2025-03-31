import { z } from "zod"

export const toolName = `get_users_profile`
export const toolDescription = `Get User's Profile`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/users/{user_id}`
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

export const inputParams = z.object({ "path": z.object({ "user_id": z.string().describe("The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).\n") }).optional() }).shape