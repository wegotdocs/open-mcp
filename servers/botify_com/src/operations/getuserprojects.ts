import { z } from "zod"

export const toolName = `getuserprojects`
export const toolDescription = `List all active projects for the user`
export const baseUrl = `https://api.botify.com/v1`
export const path = `/projects/{username}`
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