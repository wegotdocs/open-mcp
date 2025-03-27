import { z } from "zod"

export const toolName = `fetchfields`
export const toolDescription = `Retrieve list of Fields`
export const baseUrl = `https://platform.climate.com`
export const path = `/v4/fields`
export const method = `get`
export const security = [
  {
    "key": "X-Api-Key",
    "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "X-Api-Key"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "header": z.object({ "X-Next-Token": z.string().describe("Opaque string which allows for fetching the next batch of results.  Can be used to poll for changes.").optional(), "X-Limit": z.number().int().gte(1).lte(100).describe("Max number of results to return per batch.  Must be between 1 and 100 inclusive.  Defaults to 100.").optional() }).optional(), "query": z.object({ "fieldName": z.string().describe("Optional prefix filter for field name. Must be at least 3 characters.").optional() }).optional() }).shape