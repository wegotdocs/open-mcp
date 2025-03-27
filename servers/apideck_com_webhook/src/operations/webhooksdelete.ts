import { z } from "zod"

export const toolName = `webhooksdelete`
export const toolDescription = `Delete webhook subscription`
export const baseUrl = `https://unify.apideck.com`
export const path = `/webhook/webhooks/{id}`
export const method = `delete`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.") }).optional(), "header": z.object({ "x-apideck-app-id": z.string().describe("The ID of your Unify application") }).optional() }).shape