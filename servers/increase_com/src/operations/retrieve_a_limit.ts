import { z } from "zod"

export const toolName = `retrieve_a_limit`
export const toolDescription = `Retrieve a Limit`
export const baseUrl = `https://api.increase.com`
export const path = `/limits/{limit_id}`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "path": z.object({ "limit_id": z.string().describe("The identifier of the Limit to retrieve.") }).optional() }).shape