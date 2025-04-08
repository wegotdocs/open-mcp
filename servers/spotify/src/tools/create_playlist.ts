import { z } from "zod"

export const toolName = `create_playlist`
export const toolDescription = `Create Playlist`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/users/{user_id}/playlists`
export const method = `post`
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
    "user_id"
  ],
  "cookie": [],
  "body": [
    "name",
    "public",
    "collaborative",
    "description"
  ]
}
export const flatMap = {}

export const inputParams = {
  "user_id": z.string().describe("The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).\n"),
  "name": z.string().describe("The name for the new playlist, for example `\"Your Coolest Playlist\"`. This name does not need to be unique; a user may have several playlists with the same name.\n"),
  "public": z.boolean().describe("Defaults to `true`. The playlist's public/private status (if it should be added to the user's profile or not): `true` the playlist will be public, `false` the playlist will be private. To be able to create private playlists, the user must have granted the `playlist-modify-private` [scope](/documentation/web-api/concepts/scopes/#list-of-scopes). For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)\n").optional(),
  "collaborative": z.boolean().describe("Defaults to `false`. If `true` the playlist will be collaborative. _**Note**: to create a collaborative playlist you must also set `public` to `false`. To create collaborative playlists you must have granted `playlist-modify-private` and `playlist-modify-public` [scopes](/documentation/web-api/concepts/scopes/#list-of-scopes)._\n").optional(),
  "description": z.string().describe("value for playlist description as displayed in Spotify Clients and in the Web API.\n").optional()
}