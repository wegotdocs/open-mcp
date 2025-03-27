import { z } from "zod"

export const toolName = `getnetworkalertssettings`
export const toolDescription = `Return the alert configuration for this network`
export const baseUrl = `https://api.meraki.com/api/v1`
export const path = `/networks/{networkId}/alerts/settings`
export const method = `get`
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

export const inputParams = z.object({ "path": z.object({ "networkId": z.string() }).optional() }).shape