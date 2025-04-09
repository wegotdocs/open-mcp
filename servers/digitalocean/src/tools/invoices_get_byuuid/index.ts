export { inputParams } from "./schema/root.js"

export const toolName = `invoices_get_byuuid`
export const toolDescription = `Retrieve an Invoice by UUID`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/customers/my/invoices/{invoice_uuid}`
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
  "query": [
    "per_page",
    "page"
  ],
  "header": [],
  "path": [
    "invoice_uuid"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}