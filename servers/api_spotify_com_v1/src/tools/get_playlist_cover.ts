import { z } from "zod"

export const toolName = `get_playlist_cover`
export const toolDescription = `Get Playlist Cover Image`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/playlists/{playlist_id}/images`
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
    "p_playlist_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {
  "p_playlist_id": "playlist_id"
}

export const inputParams = z.object({ "p_playlist_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.\n") }).shape