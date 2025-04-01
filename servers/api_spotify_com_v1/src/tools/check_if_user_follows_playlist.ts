import { z } from "zod"

export const toolName = `check_if_user_follows_playlist`
export const toolDescription = `Check if Current User Follows Playlist`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/playlists/{playlist_id}/followers/contains`
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

export const inputParams = z.object({ "p_playlist_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.\n"), "q_ids": z.string().describe("**Deprecated** A single item list containing current user's [Spotify Username](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 1 id.\n").optional() }).shape