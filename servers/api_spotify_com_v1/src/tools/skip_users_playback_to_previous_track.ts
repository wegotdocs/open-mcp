import { z } from "zod"

export const toolName = `skip_users_playback_to_previous_track`
export const toolDescription = `Skip To Previous`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/player/previous`
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

export const inputParams = z.object({ "q_device_id": z.string().describe("The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n").optional() }).shape