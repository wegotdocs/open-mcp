import { z } from "zod"

export const toolName = `getdeviceswitchportsstatusespackets`
export const toolDescription = `Return the packet counters for all the ports of a switch`
export const baseUrl = `https://api.meraki.com/api/v1`
export const path = `/devices/{serial}/switch/ports/statuses/packets`
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

export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "query": z.object({ "t0": z.string().describe("The beginning of the timespan for the data. The maximum lookback period is 1 day from today.").optional(), "timespan": z.number().describe("The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 1 day. The default is 1 day.").optional() }).optional() }).shape