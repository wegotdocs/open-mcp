import { z } from "zod"

export const toolName = `getsitemapssamplesoutofconfig`
export const toolDescription = `Sample list of URLs which were found in your sitemaps but outside of the`
export const baseUrl = `https://api.botify.com/v1`
export const path = `/analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/out_of_config`
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

export const inputParams = z.object({ "query": z.object({ "page": z.number().int().describe("Page Number").optional(), "size": z.number().int().describe("Page Size").optional() }).optional() }).shape