import { z } from "zod"

export const toolName = `postinvoicesinvoicelineslineitemid`
export const toolDescription = `Update an invoice's line item`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/invoices/{invoice}/lines/{line_item_id}`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
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
    "invoice",
    "line_item_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "invoice": z.string().max(5000).describe("Invoice ID of line item"), "line_item_id": z.string().max(5000).describe("Invoice line item ID") }).shape