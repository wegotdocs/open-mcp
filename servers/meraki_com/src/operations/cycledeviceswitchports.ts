import { z } from "zod"

export const toolName = `cycledeviceswitchports`
export const toolDescription = `Cycle a set of switch ports`
export const baseUrl = `https://api.meraki.com/api/v1`
export const path = `/devices/{serial}/switch/ports/cycle`
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

export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "body": z.object({ "ports": z.array(z.string()).describe("List of switch ports. Example: [1, 2-5, 1_MA-MOD-8X10G_1, 1_MA-MOD-8X10G_2-1_MA-MOD-8X10G_8]") }).optional() }).shape