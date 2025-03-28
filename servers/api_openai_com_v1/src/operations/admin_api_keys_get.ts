import { z } from "zod"

export const toolName = `admin_api_keys_get`
export const toolDescription = `Retrieve a single organization API key`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/organization/admin_api_keys/{key_id}`
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

export const inputParams = z.object({ "path": z.object({ "key_id": z.string().describe("The ID of the API key.") }).optional() }).shape