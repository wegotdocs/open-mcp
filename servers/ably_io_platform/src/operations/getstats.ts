import { z } from "zod"

export const toolName = `getstats`
export const toolDescription = `Retrieve usage statistics for an application`
export const baseUrl = `https://rest.ably.io`
export const path = `/stats`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "query": z.object({ "start": z.string().optional(), "limit": z.number().int(), "end": z.string(), "direction": z.enum(["forwards","backwards"]), "unit": z.enum(["minute","hour","day","month"]).describe("Specifies the unit of aggregation in the returned results.") }).optional() }).shape