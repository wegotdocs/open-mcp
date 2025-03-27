import { z } from "zod"

export const toolName = `deletedeviceswitchroutingstaticroute`
export const toolDescription = `Delete a layer 3 static route for a switch`
export const baseUrl = `https://api.meraki.com/api/v1`
export const path = `/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}`
export const method = `delete`
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

export const inputParams = z.object({ "path": z.object({ "serial": z.string(), "staticRouteId": z.string() }).optional() }).shape