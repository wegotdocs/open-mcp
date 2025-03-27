import { z } from "zod"

export const toolName = `geocodeaddress`
export const toolDescription = `Geocode Address`
export const baseUrl = `https://neutrinoapi.net`
export const path = `/geocode-address`
export const method = `get`
export const security = [
  {
    "key": "api-key",
    "value": "<mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "apiKey",
    "schemeName": "api-key"
  },
  {
    "key": "user-id",
    "value": "<mcp-env-var>USER_ID</mcp-env-var>",
    "in": "header",
    "envVarName": "USER_ID",
    "schemeType": "apiKey",
    "schemeName": "user-id"
  }
]

export const inputParams = z.object({ "query": z.object({ "address": z.string().describe("The full address, partial address or name of a place to try and locate. Comma separated address components are preferred.").optional(), "house-number": z.string().describe("The house/building number to locate").optional(), "street": z.string().describe("The street/road name to locate").optional(), "city": z.string().describe("The city/town name to locate").optional(), "county": z.string().describe("The county/region name to locate").optional(), "state": z.string().describe("The state name to locate").optional(), "postal-code": z.string().describe("The postal code to locate").optional(), "country-code": z.string().describe("Limit result to this country (the default is no country bias)").optional(), "language-code": z.string().describe("The language to display results in, available languages are: <ul> <li>de, en, es, fr, it, pt, ru, zh</li> </ul>"), "fuzzy-search": z.boolean().describe("If no matches are found for the given address, start performing a recursive fuzzy search until a geolocation is found. This option is recommended for processing user input or implementing auto-complete. We use a combination of approximate string matching and data cleansing to find possible location matches") }).optional() }).shape