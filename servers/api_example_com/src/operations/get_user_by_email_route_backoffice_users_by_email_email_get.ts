import { z } from "zod"

export const toolName = `get_user_by_email_route_backoffice_users_by_email_email_get`
export const toolDescription = `Get User By Email Route`
export const baseUrl = `https://api.example.com`
export const path = `/backoffice/users/by/email/{email}`
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

export const inputParams = z.object({ "path": z.object({ "email": z.string() }).optional() }).shape