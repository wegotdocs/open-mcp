export { inputParams } from "./schema/root.js"

export const toolName = `deletecustomerscustomersourcesid`
export const toolDescription = `Delete a customer source`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/customers/{customer}/sources/{id}`
export const method = `delete`
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
    "customer",
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}