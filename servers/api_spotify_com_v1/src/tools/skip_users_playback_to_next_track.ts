import { z } from "zod"

export const toolName = `skip_users_playback_to_next_track`
export const toolDescription = `Skip To Next`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/player/next`
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
  "query": [
    "device_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "device_id": z.string().describe("The id of the device this command is targeting. If not supplied, the user's currently active device is the target.").optional() }).shape