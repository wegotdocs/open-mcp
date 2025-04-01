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
export const keys = {
  "query": [
    "q_state",
    "q_device_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {
  "q_state": "state",
  "q_device_id": "device_id"
}

export const inputParams = z.object({ "q_state": z.string().describe("**track**, **context** or **off**.<br/>\n**track** will repeat the current track.<br/>\n**context** will repeat the current context.<br/>\n**off** will turn repeat off.\n"), "q_device_id": z.string().describe("The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n").optional() }).shape