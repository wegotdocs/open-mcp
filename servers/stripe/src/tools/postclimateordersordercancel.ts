import { z } from "zod"

export const toolName = `postclimateordersordercancel`
export const toolDescription = `Cancel an order`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/climate/orders/{order}/cancel`
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
    "order"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "order": z.string().max(5000).describe("Unique identifier of the order.")
}