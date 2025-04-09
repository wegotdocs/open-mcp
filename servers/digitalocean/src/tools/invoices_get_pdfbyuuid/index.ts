export { inputParams } from "./schema/root.js"

export const toolName = `invoices_get_pdfbyuuid`
export const toolDescription = `Retrieve an Invoice PDF by UUID`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/customers/my/invoices/{invoice_uuid}/pdf`
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
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "invoice_uuid"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}