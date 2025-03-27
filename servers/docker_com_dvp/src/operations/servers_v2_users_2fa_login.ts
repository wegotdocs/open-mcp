import { z } from "zod"

export const toolName = `servers_v2_users_2fa_login`
export const toolDescription = ``
export const baseUrl = `https://hub.docker.com/api/publisher/analytics/v1`
export const path = `/v2/users/2fa-login`
export const method = `servers`
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

export const inputParams = z.object({}).shape