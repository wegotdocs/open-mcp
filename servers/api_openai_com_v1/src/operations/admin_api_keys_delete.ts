import { z } from "zod"

export const toolName = `admin_api_keys_delete`
export const toolDescription = `Delete an organization admin API key`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/organization/admin_api_keys/{key_id}`
export const method = `delete`
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

export const inputParams = z.object({ "path": z.object({ "key_id": z.string().describe("The ID of the API key to be deleted.") }).optional() }).shape