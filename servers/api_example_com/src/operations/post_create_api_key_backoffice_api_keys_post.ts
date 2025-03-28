import { z } from "zod"

export const toolName = `post_create_api_key_backoffice_api_keys_post`
export const toolDescription = `Post Create Api Key`
export const baseUrl = `https://api.example.com`
export const path = `/backoffice/api-keys`
export const method = `post`
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

export const inputParams = z.object({ "body": z.object({ "id": z.number().int(), "user_id": z.string(), "name": z.string(), "archived": z.boolean(), "api_key": z.string() }).describe("API Key").optional() }).shape