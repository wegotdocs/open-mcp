import { z } from "zod"

export const toolName = `add_to_queue`
export const toolDescription = `Add Item to Playback Queue`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/player/queue`
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
    "q_uri",
    "q_device_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {
  "q_uri": "uri",
  "q_device_id": "device_id"
}

export const inputParams = z.object({ "q_uri": z.string().describe("The uri of the item to add to the queue. Must be a track or an episode uri.\n"), "q_device_id": z.string().describe("The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n").optional() }).shape