import { z } from "zod"

export const toolName = `geturlsdatamodel`
export const toolDescription = `Gets an Analysis datamodel`
export const baseUrl = `https://api.botify.com/v1`
export const path = `/analyses/{username}/{project_slug}/{analysis_slug}/urls/datamodel`
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

export const inputParams = z.object({ "query": z.object({ "area": z.enum(["current","disappeared","new","search_engines_orphans"]) }).optional() }).shape