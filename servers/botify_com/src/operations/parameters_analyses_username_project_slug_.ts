import { z } from "zod"

export const toolName = `parameters_analyses_username_project_slug_`
export const toolDescription = ``
export const baseUrl = `https://api.botify.com/v1`
export const path = `/analyses/{username}/{project_slug}`
export const method = `parameters`
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