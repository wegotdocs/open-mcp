import { z } from "zod"

export const toolName = `getnumberinsightadvanced`
export const toolDescription = `Advanced Number Insight (sync)`
export const baseUrl = `https://api.nexmo.com/ni`
export const path = `/advanced/{format}`
export const method = `get`
export const security = [
  {
    "key": "api_key",
    "value": "<mcp-env-var>API_KEY</mcp-env-var>",
    "in": "query",
    "envVarName": "API_KEY",
    "schemeType": "apiKey",
    "schemeName": "api_key"
  },
  {
    "key": "api_secret",
    "value": "<mcp-env-var>API_SECRET</mcp-env-var>",
    "in": "query",
    "envVarName": "API_SECRET",
    "schemeType": "apiKey",
    "schemeName": "api_secret"
  }
]

export const inputParams = z.object({ "query": z.object({ "real_time_data": z.boolean().describe("A boolean to choose whether to get real time data back in the response.").optional(), "number": z.string().regex(new RegExp("^[0-9-+\\(\\)\\s]*$")).describe("A single phone number that you need insight about in national or international format."), "country": z.string().regex(new RegExp("[A-Z]{2}")).describe("If a number does not have a country code or is uncertain, set the two-character country code. This code must be in ISO 3166-1 alpha-2 format and in upper case. For example, GB or US. If you set country and number is already in [E.164](https://en.wikipedia.org/wiki/E.164) format, country must match the country code in number.").optional(), "cnam": z.boolean().describe("Indicates if the name of the person who owns the phone number should be looked up and returned in the response. Set to true to receive phone number owner name in the response. This features is available for US numbers only and incurs an additional charge."), "ip": z.string().describe("This parameter is deprecated as we are no longer able to retrieve reliable IP data globally from carriers. ").optional() }).optional() }).shape