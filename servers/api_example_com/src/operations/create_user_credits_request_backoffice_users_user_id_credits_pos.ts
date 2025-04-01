import { z } from "zod"

export const toolName = `create_user_credits_request_backoffice_users_user_id_credits_pos`
export const toolDescription = `Create User Credits Request`
export const baseUrl = `https://api.example.com`
export const path = `/backoffice/users/{user_id}/credits`
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

export const inputParams = z.object({ "path": z.object({ "user_id": z.string() }).optional(), "body": z.object({ "total_credits": z.number().int() }).describe("User Credits Create").optional() }).shape