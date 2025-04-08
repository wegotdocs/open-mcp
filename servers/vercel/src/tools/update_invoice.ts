import { z } from "zod"

export const toolName = `update_invoice`
export const toolDescription = `Invoice Actions`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/installations/{integrationConfigurationId}/billing/invoices/{invoiceId}/actions`
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
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "integrationConfigurationId",
    "invoiceId"
  ],
  "cookie": [],
  "body": [
    "action",
    "reason",
    "total"
  ]
}
export const flatMap = {}

export const inputParams = {
  "integrationConfigurationId": z.string(),
  "invoiceId": z.string(),
  "action": z.literal("refund"),
  "reason": z.string().describe("Refund reason."),
  "total": z.string().regex(new RegExp("^[0-9]+(\\\\.[0-9]+)?$")).describe("The total amount to be refunded. Must be less than or equal to the total amount of the invoice.")
}