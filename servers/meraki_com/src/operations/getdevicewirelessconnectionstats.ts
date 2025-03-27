import { z } from "zod"

export const toolName = `getdevicewirelessconnectionstats`
export const toolDescription = `Aggregated connectivity info for a given AP on this network`
export const baseUrl = `https://api.meraki.com/api/v1`
export const path = `/devices/{serial}/wireless/connectionStats`
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

export const inputParams = z.object({ "path": z.object({ "serial": z.string() }).optional(), "query": z.object({ "t0": z.string().describe("The beginning of the timespan for the data. The maximum lookback period is 180 days from today.").optional(), "t1": z.string().describe("The end of the timespan for the data. t1 can be a maximum of 7 days after t0.").optional(), "timespan": z.number().describe("The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.").optional(), "band": z.enum(["2.4","5","6"]).describe("Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information.").optional(), "ssid": z.number().int().describe("Filter results by SSID").optional(), "vlan": z.number().int().describe("Filter results by VLAN").optional(), "apTag": z.string().describe("Filter results by AP Tag").optional() }).optional() }).shape