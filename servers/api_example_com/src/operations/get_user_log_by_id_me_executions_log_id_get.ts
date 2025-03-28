import { z } from "zod"

export const toolName = `get_user_log_by_id_me_executions_log_id_get`
export const toolDescription = `Get User Log By Id`
export const baseUrl = `https://api.example.com`
export const path = `/me/executions/{log_id}`
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

export const inputParams = z.object({ "path": z.object({ "log_id": z.number().int() }).optional() }).shape