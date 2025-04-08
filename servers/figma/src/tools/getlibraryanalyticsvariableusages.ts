import { z } from "zod"

export const toolName = `getlibraryanalyticsvariableusages`
export const toolDescription = `Get library analytics variable usage data.`
export const baseUrl = `https://api.figma.com`
export const path = `/v1/analytics/libraries/{file_key}/variable/usages`
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
    "group_by"
  ],
  "header": [],
  "path": [
    "file_key"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "file_key": z.string().describe("File key of the library to fetch analytics data for."),
  "cursor": z.string().describe("Cursor indicating what page of data to fetch. Obtained from prior API call.").optional(),
  "group_by": z.enum(["variable","file"]).describe("A dimension to group returned analytics data by.")
}