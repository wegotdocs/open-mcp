import { z } from "zod"

export const toolName = `post_reset_credit_allowance_backoffice_users_reset_credit_allowa`
export const toolDescription = `Post Reset Credit Allowance`
export const baseUrl = `https://api.example.com`
export const path = `/backoffice/users/reset_credit_allowance`
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

export const inputParams = z.object({}).shape