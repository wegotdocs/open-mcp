import { z } from "zod"

export const toolName = `geturldetail`
export const toolDescription = `Gets the detail of an URL for an analysis`
export const baseUrl = `https://api.botify.com/v1`
export const path = `/analyses/{username}/{project_slug}/{analysis_slug}/urls/{url}`
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

export const inputParams = z.object({ "query": z.object({ "fields": z.array(z.string()).describe("comma separated list of fields to return (c.f. URLs Datamodel)").optional() }).optional() }).shape