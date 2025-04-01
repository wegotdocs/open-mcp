import { z } from "zod"

export const toolName = `follow_playlist`
export const toolDescription = `Follow Playlist`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/playlists/{playlist_id}/followers`
export const method = `put`
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
    "playlist_id"
  ],
  "cookie": [],
  "body": [
    "public"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "playlist_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.\n"), "public": z.boolean().describe("Defaults to `true`. If `true` the playlist will be included in user's public playlists (added to profile), if `false` it will remain private. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)\n").optional() }).shape