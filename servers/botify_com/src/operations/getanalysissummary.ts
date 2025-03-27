import { z } from "zod"

export const toolName = `getanalysissummary`
export const toolDescription = `Get an Analysis detail`
export const baseUrl = `https://api.botify.com/v1`
export const path = `/analyses/{username}/{project_slug}/{analysis_slug}`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
    "in": "header",
    "envVarName": "AUTHORIZATION",
    "schemeType": "apiKey",
    "schemeName": "Authorization"
  }
]

export const inputParams = z.object({}).shape