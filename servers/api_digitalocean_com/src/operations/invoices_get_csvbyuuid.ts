import { z } from "zod"

export const toolName = `invoices_get_csvbyuuid`
export const toolDescription = `Retrieve an Invoice CSV by UUID`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/customers/my/invoices/{invoice_uuid}/csv`
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

export const inputParams = z.object({ "path": z.object({ "invoice_uuid": z.string().describe("UUID of the invoice") }).optional() }).shape