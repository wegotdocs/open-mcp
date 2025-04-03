import { z } from "zod"

export const toolName = `getlibraryanalyticsstyleactions`
export const toolDescription = `Get library analytics style action data.`
export const baseUrl = `https://api.figma.com`
export const path = `/v1/analytics/libraries/{file_key}/style/actions`
export const method = `get`
export const security = [
  {
    "key": "X-Figma-Token",
    "value": "<mcp-env-var>X_FIGMA_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "X_FIGMA_TOKEN",
    "schemeType": "apiKey",
    "schemeName": "X-Figma-Token"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [
    "cursor",
    "group_by",
    "start_date",
    "end_date"
  ],
  "header": [],
  "path": [
    "file_key"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "file_key": z.string().describe("File key of the library to fetch analytics data for."), "cursor": z.string().describe("Cursor indicating what page of data to fetch. Obtained from prior API call.").optional(), "group_by": z.enum(["style","team"]).describe("A dimension to group returned analytics data by."), "start_date": z.string().describe("ISO 8601 date string (YYYY-MM-DD) of the earliest week to include. Dates are rounded back to the nearest start of a week. Defaults to one year prior.").optional(), "end_date": z.string().describe("ISO 8601 date string (YYYY-MM-DD) of the latest week to include. Dates are rounded forward to the nearest end of a week. Defaults to the latest computed week.").optional() }).shape