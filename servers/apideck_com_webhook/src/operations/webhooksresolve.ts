import { z } from "zod"

export const toolName = `webhooksresolve`
export const toolDescription = `Resolve and Execute a connection webhook`
export const baseUrl = `https://unify.apideck.com`
export const path = `/webhook/w/{id}/{serviceId}`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("JWT Webhook token that represents the connection lookupId. Signed so we know source came from us"), "serviceId": z.string().describe("Service provider ID.") }).optional(), "query": z.object({ "e": z.string().describe("The name of downstream event when connector does not supply in body or header").optional() }).optional(), "body": z.record(z.any()).optional() }).shape