import { z } from "zod"

export const toolName = `start_a_users_playback`
export const toolDescription = `Start/Resume Playback`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/player/play`
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
  "query": [
    "q_device_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "b_context_uri",
    "b_uris",
    "b_offset",
    "b_position_ms"
  ]
}

export const inputParams = z.object({ "q_device_id": z.string().describe("The id of the device this command is targeting. If not supplied, the user's currently active device is the target.").optional(), "b_context_uri": z.string().describe("Optional. Spotify URI of the context to play.\nValid contexts are albums, artists & playlists.\n`{context_uri:\"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT\"}`\n").optional(), "b_uris": z.array(z.string()).describe("Optional. A JSON array of the Spotify track URIs to play.\nFor example: `{\"uris\": [\"spotify:track:4iV5W9uYEdYUVa79Axb7Rh\", \"spotify:track:1301WleyT98MSxVHPZCA6M\"]}`\n").optional(), "b_offset": z.record(z.any()).describe("Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object\n\"position\" is zero based and can’t be negative. Example: `\"offset\": {\"position\": 5}`\n\"uri\" is a string representing the uri of the item to start at. Example: `\"offset\": {\"uri\": \"spotify:track:1301WleyT98MSxVHPZCA6M\"}`\n").optional(), "b_position_ms": z.number().int().describe("Indicates from what position to start playback. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song.\n").optional() }).shape