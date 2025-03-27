import { z } from "zod"

export const toolName = `getdevicecameraanalyticsoverview`
export const toolDescription = `Returns an overview of aggregate analytics data for a timespan`
export const baseUrl = `https://api.meraki.com/api/v1`
export const path = `/devices/{serial}/camera/analytics/overview`
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

export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "query": z.object({ "t0": z.string().describe("The beginning of the timespan for the data. The maximum lookback period is 365 days from today.").optional(), "t1": z.string().describe("The end of the timespan for the data. t1 can be a maximum of 7 days after t0.").optional(), "timespan": z.number().describe("The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour.").optional(), "objectType": z.enum(["person","vehicle"]).describe("[optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].").optional() }).optional() }).shape