import { z } from "zod"

export const toolName = `get_user_credits_me_credits_get`
export const toolDescription = `Get User Credits`
export const baseUrl = `https://api.example.com`
export const path = `/me/credits`
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

export const inputParams = z.object({}).shape