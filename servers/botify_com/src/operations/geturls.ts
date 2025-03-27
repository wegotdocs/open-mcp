import { z } from "zod"

export const toolName = `geturls`
export const toolDescription = `Executes a query and returns a paginated response`
export const baseUrl = `https://api.botify.com/v1`
export const path = `/analyses/{username}/{project_slug}/{analysis_slug}/urls`
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

export const inputParams = z.object({ "query": z.object({ "area": z.enum(["current","disappeared","new","search_engines_orphans"]).describe("Analysis context to execute the query"), "page": z.number().int().describe("Page Number").optional(), "size": z.number().int().describe("Page Size").optional() }).optional(), "body": z.object({ "fields": z.array(z.string()).optional(), "filters": z.record(z.any()).optional(), "sort": z.array(z.record(z.any())).optional() }).optional() }).shape