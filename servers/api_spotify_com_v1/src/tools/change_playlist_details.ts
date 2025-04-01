import { z } from "zod"

export const toolName = `change_playlist_details`
export const toolDescription = `Change Playlist Details`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/playlists/{playlist_id}`
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
    "p_playlist_id"
  ],
  "cookie": [],
  "body": [
    "b_name",
    "b_public",
    "b_collaborative",
    "b_description"
  ]
}
export const flatMap = {
  "p_playlist_id": "playlist_id",
  "b_name": "name",
  "b_public": "public",
  "b_collaborative": "collaborative",
  "b_description": "description"
}

export const inputParams = z.object({ "p_playlist_id": z.string().describe("The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.\n"), "b_name": z.string().describe("The new name for the playlist, for example `\"My New Playlist Title\"`\n").optional(), "b_public": z.boolean().describe("The playlist's public/private status (if it should be added to the user's profile or not): `true` the playlist will be public, `false` the playlist will be private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)\n").optional(), "b_collaborative": z.boolean().describe("If `true`, the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client. <br/>\n_**Note**: You can only set `collaborative` to `true` on non-public playlists._\n").optional(), "b_description": z.string().describe("Value for playlist description as displayed in Spotify Clients and in the Web API.\n").optional() }).shape