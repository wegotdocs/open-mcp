import { z } from "zod"

export const toolName = `generatedevicecamerasnapshot`
export const toolDescription = `Generate a snapshot of what the camera sees at the specified time and return a link to that image.`
export const baseUrl = `https://api.meraki.com/api/v1`
export const path = `/devices/{serial}/camera/generateSnapshot`
export const method = `post`
export const security = [
  {
    "key": "X-Cisco-Meraki-API-Key",
    "value": "<mcp-env-var>X_CISCO_MERAKI_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_CISCO_MERAKI_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "X-Cisco-Meraki-API-Key"
  }
]

export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "body": z.object({ "fullframe": z.boolean().describe("[optional] If set to \"true\" the snapshot will be taken at full sensor resolution. This will error if used with timestamp.").optional(), "timestamp": z.string().datetime({ offset: true }).describe("[optional] The snapshot will be taken from this time on the camera. The timestamp is expected to be in ISO 8601 format. If no timestamp is specified, we will assume current time.").optional() }).optional() }).shape