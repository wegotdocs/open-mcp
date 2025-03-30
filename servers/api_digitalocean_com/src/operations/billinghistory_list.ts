import { z } from "zod"

export const toolName = `billinghistory_list`
export const toolDescription = `List Billing History`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/customers/my/billing_history`
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