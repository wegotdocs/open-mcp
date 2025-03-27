import { z } from "zod"

export const toolName = `parameters_analyses_username_project_slug_analysis_slug_urls_dat`
export const toolDescription = ``
export const baseUrl = `https://api.botify.com/v1`
export const path = `/analyses/{username}/{project_slug}/{analysis_slug}/urls/datamodel`
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