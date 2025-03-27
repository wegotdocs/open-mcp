import { z } from "zod"

export const toolName = `getpaymentmethods`
export const toolDescription = `Payment Methods List`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/account/payment-methods`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "query": z.object({ "page": z.number().int().gte(1).describe("The page of a collection to return."), "page_size": z.number().int().gte(25).lte(500).describe("The number of items to return per page.") }).optional() }).shape