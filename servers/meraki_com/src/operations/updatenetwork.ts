import { z } from "zod"

export const toolName = `updatenetwork`
export const toolDescription = `Update a network`
export const baseUrl = `https://api.meraki.com/api/v1`
export const path = `/networks/{networkId}`
export const method = `put`
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

export const inputParams = z.object({ "path": z.object({ "networkId": z.string() }).optional(), "body": z.object({ "enrollmentString": z.string().describe("A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break.").optional(), "name": z.string().describe("The name of the network").optional(), "notes": z.string().describe("Add any notes or additional information about this network here.").optional(), "tags": z.array(z.string()).describe("A list of tags to be applied to the network").optional(), "timeZone": z.string().describe("The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a>").optional() }).optional() }).shape