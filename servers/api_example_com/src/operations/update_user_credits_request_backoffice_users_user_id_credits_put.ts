import { z } from "zod"

export const toolName = `update_user_credits_request_backoffice_users_user_id_credits_put`
export const toolDescription = `Update User Credits Request`
export const baseUrl = `https://api.example.com`
export const path = `/backoffice/users/{user_id}/credits`
export const method = `put`
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

export const inputParams = z.object({ "path": z.object({ "user_id": z.string() }).optional(), "body": z.object({ "amount": z.number().int() }).describe("Increase User Credits").optional() }).shape