import { z } from "zod"

export const toolName = `blinkdeviceleds`
export const toolDescription = `Blink the LEDs on a device`
export const baseUrl = `https://api.meraki.com/api/v1`
export const path = `/devices/{serial}/blinkLeds`
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

export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "body": z.object({ "duration": z.number().int().describe("The duration in seconds. Must be between 5 and 120. Default is 20 seconds").optional(), "duty": z.number().int().describe("The duty cycle as the percent active. Must be between 10 and 90. Default is 50.").optional(), "period": z.number().int().describe("The period in milliseconds. Must be between 100 and 1000. Default is 160 milliseconds").optional() }).optional() }).shape