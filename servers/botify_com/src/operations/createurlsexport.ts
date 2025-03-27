import { z } from "zod"

export const toolName = `createurlsexport`
export const toolDescription = `Creates a new UrlExport object and starts a task that will export the results into a csv`
export const baseUrl = `https://api.botify.com/v1`
export const path = `/analyses/{username}/{project_slug}/{analysis_slug}/urls/export`
export const method = `post`
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

export const inputParams = z.object({ "query": z.object({ "area": z.enum(["current","disappeared","new","search_engines_orphans"]) }).optional(), "body": z.object({ "fields": z.array(z.string()).optional(), "filters": z.record(z.any()).optional(), "sort": z.array(z.record(z.any())).optional() }).optional() }).shape