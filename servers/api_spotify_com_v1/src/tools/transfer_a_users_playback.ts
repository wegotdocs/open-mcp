import { z } from "zod"

export const toolName = `transfer_a_users_playback`
export const toolDescription = `Transfer Playback`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/me/player`
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
  "path": [],
  "cookie": [],
  "body": [
    "device_ids",
    "play"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "device_ids": z.array(z.string()).describe("A JSON array containing the ID of the device on which playback should be started/transferred.<br/>For example:`{device_ids:[\"74ASZWbe4lXaubB36ztrGX\"]}`<br/>_**Note**: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return `400 Bad Request`_\n"), "play": z.boolean().describe("**true**: ensure playback happens on new device.<br/>**false** or not provided: keep the current playback state.\n").optional() }).shape