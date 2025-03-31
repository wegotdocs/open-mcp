import { z } from "zod"

export const toolName = `pause_a_users_playback`
export const toolDescription = `Pause Playback`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/player/pause`
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

export const inputParams = z.object({ "q_device_id": z.string().describe("The id of the device this command is targeting. If not supplied, the user's currently active device is the target.\n").optional() }).shape