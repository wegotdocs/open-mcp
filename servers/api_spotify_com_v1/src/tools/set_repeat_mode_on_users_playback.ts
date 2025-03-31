import { z } from "zod"

export const toolName = `set_repeat_mode_on_users_playback`
export const toolDescription = `Set Repeat Mode`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/player/repeat`
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

export const inputParams = z.object({ "query": z.object({ "state": z.string().describe("**track**, **context** or **off**.<br/>\n**track** will repeat the current track.<br/>\n**context** will repeat the current context.<br/>\n**off** will turn repeat off.\n"), "device_id": z.string().describe("The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n").optional() }).optional() }).shape