import { z } from "zod"

export const toolName = `postproxy`
export const toolDescription = `POST`
export const baseUrl = `https://unify.apideck.com`
export const path = `/proxy`
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

export const inputParams = z.object({ "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API."), "x-apideck-downstream-url": z.string().describe("Downstream URL"), "x-apideck-downstream-authorization": z.string().describe("Downstream authorization header. This will skip the Vault token injection.").optional() }).optional() }).shape