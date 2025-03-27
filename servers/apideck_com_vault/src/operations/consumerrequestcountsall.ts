import { z } from "zod"

export const toolName = `consumerrequestcountsall`
export const toolDescription = `Consumer request counts`
export const baseUrl = `https://unify.apideck.com`
export const path = `/vault/consumers/{consumer_id}/stats`
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

export const inputParams = z.object({ "header": z.object({ "x-apideck-app-id": z.string().describe("The ID of your Unify application") }).optional(), "path": z.object({ "consumer_id": z.string().describe("ID of the consumer to return") }).optional(), "query": z.object({ "start_datetime": z.string().describe("Scopes results to requests that happened after datetime"), "end_datetime": z.string().describe("Scopes results to requests that happened before datetime") }).optional() }).shape