import { z } from "zod"

export const toolName = `deletewebhookendpointswebhookendpoint`
export const toolDescription = `Delete a webhook endpoint`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/webhook_endpoints/{webhook_endpoint}`
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
    "webhook_endpoint"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "webhook_endpoint": z.string().max(5000)
}