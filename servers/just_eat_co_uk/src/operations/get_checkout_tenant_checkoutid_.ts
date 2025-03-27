import { z } from "zod"

export const toolName = `get_checkout_tenant_checkoutid_`
export const toolDescription = `Get Checkout`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/checkout/{tenant}/{checkoutId}`
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

export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("A two-character country code. \n\nThe following countries are supported:\n  - United Kingdom (UK)\n  - Australia (AU)\n  - New Zealand (NZ)\n"), "checkoutId": z.string().describe("A unique identifier for a checkout. This is currently a Basket Id.") }).optional(), "header": z.object({ "User-Agent": z.string().describe("Allows the server to identify the application making the request.") }).optional() }).shape