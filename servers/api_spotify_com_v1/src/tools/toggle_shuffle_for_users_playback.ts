import { z } from "zod"

export const toolName = `toggle_shuffle_for_users_playback`
export const toolDescription = `Toggle Playback Shuffle`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/player/shuffle`
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

export const inputParams = z.object({ "q_state": z.boolean().describe("**true** : Shuffle user's playback.<br/>\n**false** : Do not shuffle user's playback.\n"), "q_device_id": z.string().describe("The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n").optional() }).shape