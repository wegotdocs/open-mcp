import { z } from "zod"

export const toolName = `createdevicelivetoolspingdevice`
export const toolDescription = `Enqueue a job to check connectivity status to the device`
export const baseUrl = `https://api.meraki.com/api/v1`
export const path = `/devices/{serial}/liveTools/pingDevice`
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

export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "body": z.object({ "count": z.number().int().describe("Count parameter to pass to ping. [1..5], default 5").optional() }).optional() }).shape