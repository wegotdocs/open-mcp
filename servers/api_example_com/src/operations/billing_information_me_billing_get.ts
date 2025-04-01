import { z } from "zod"

export const toolName = `billing_information_me_billing_get`
export const toolDescription = `Billing Information`
export const baseUrl = `https://api.example.com`
export const path = `/me/billing`
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