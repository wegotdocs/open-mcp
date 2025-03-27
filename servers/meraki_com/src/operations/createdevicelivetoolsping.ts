import { z } from "zod"

export const toolName = `createdevicelivetoolsping`
export const toolDescription = `Enqueue a job to ping a target host from the device`
export const baseUrl = `https://api.meraki.com/api/v1`
export const path = `/devices/{serial}/liveTools/ping`
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

export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "body": z.object({ "count": z.number().int().describe("Count parameter to pass to ping. [1..5], default 5").optional(), "target": z.string().describe("FQDN, IPv4 or IPv6 address") }).optional() }).shape