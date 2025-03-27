import { z } from "zod"

export const toolName = `binlistdownload`
export const toolDescription = `BIN List Download`
export const baseUrl = `https://neutrinoapi.net`
export const path = `/bin-list-download`
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

export const inputParams = z.object({ "query": z.object({ "include-iso3": z.boolean().describe("Include ISO 3-letter country codes and ISO 3-letter currency codes in the data. These will be added to columns 10 and 11 respectively"), "include-8digit": z.boolean().describe("Include 8-digit and higher BIN codes. This option includes all 6-digit BINs and all 8-digit and higher BINs (including some 9, 10 and 11 digit BINs where available)") }).optional() }).shape