import { z } from "zod"

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

export const inputParams = z.object({ "path": z.object({ "invoice_uuid": z.string().describe("UUID of the invoice") }).optional(), "query": z.object({ "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page"), "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.") }).optional() }).shape