import { z } from "zod"

export const toolName = `showbrand`
export const toolDescription = `Show a Brand`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/brands/{brand_id}`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]

export const inputParams = z.object({ "path": z.object({ "brand_id": z.number().int().describe("The ID of the brand") }).optional() }).shape