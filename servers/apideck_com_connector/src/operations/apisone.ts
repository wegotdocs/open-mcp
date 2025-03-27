import { z } from "zod"

export const toolName = `apisone`
export const toolDescription = `Get API`
export const baseUrl = `https://unify.apideck.com`
export const path = `/connector/apis/{id}`
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

export const inputParams = z.object({ "header": z.object({ "x-apideck-app-id": z.string().describe("The ID of your Unify application") }).optional(), "path": z.object({ "id": z.string().describe("ID of the record you are acting upon.") }).optional() }).shape