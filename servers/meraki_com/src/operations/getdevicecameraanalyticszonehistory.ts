import { z } from "zod"

export const toolName = `getdevicecameraanalyticszonehistory`
export const toolDescription = `Return historical records for analytic zones`
export const baseUrl = `https://api.meraki.com/api/v1`
export const path = `/devices/{serial}/camera/analytics/zones/{zoneId}/history`
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

export const inputParams = z.object({ "path": z.object({ "serial": z.string(), "zoneId": z.string() }).optional(), "query": z.object({ "t0": z.string().describe("The beginning of the timespan for the data. The maximum lookback period is 365 days from today.").optional(), "t1": z.string().describe("The end of the timespan for the data. t1 can be a maximum of 14 hours after t0.").optional(), "timespan": z.number().describe("The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour.").optional(), "resolution": z.number().int().describe("The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60.").optional(), "objectType": z.enum(["person","vehicle"]).describe("[optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].").optional() }).optional() }).shape