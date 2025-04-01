import { z } from "zod"

export const toolName = `create_user_route_backoffice_users_post`
export const toolDescription = `Create User Route`
export const baseUrl = `https://api.example.com`
export const path = `/backoffice/users`
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

export const inputParams = z.object({ "body": z.object({ "first_name": z.union([z.string(), z.null()]).optional(), "last_name": z.union([z.string(), z.null()]).optional(), "email": z.string().email(), "verified": z.boolean() }).describe("User model for the backend API.").optional() }).shape