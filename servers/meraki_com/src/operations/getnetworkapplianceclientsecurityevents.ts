import { z } from "zod"

export const toolName = `getnetworkapplianceclientsecurityevents`
export const toolDescription = `List the security events for a client`
export const baseUrl = `https://api.meraki.com/api/v1`
export const path = `/networks/{networkId}/appliance/clients/{clientId}/security/events`
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

export const inputParams = z.object({ "path": z.object({ "networkId": z.string(), "clientId": z.string() }).optional(), "query": z.object({ "t0": z.string().describe("The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 791 days from today.").optional(), "t1": z.string().describe("The end of the timespan for the data. t1 can be a maximum of 791 days after t0.").optional(), "timespan": z.number().describe("The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 31 days.").optional(), "perPage": z.number().int().describe("The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.").optional(), "startingAfter": z.string().describe("A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.").optional(), "endingBefore": z.string().describe("A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.").optional(), "sortOrder": z.enum(["ascending","descending"]).describe("Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order.").optional() }).optional() }).shape