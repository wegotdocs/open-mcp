import { z } from "zod"

export const toolName = `get_list_users_playlists`
export const toolDescription = `Get User's Playlists`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/users/{user_id}/playlists`
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

export const inputParams = z.object({ "path": z.object({ "user_id": z.string().describe("The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).\n") }).optional(), "query": z.object({ "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n"), "offset": z.number().int().describe("The index of the first playlist to return. Default:\n0 (the first object). Maximum offset: 100.000\\. Use with `limit` to get the\nnext set of playlists.\n") }).optional() }).shape