import { z } from "zod"

export const toolName = `postcustomerscustomersubscriptionssubscriptionexposedid`
export const toolDescription = `Update a subscription on a customer`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/customers/{customer}/subscriptions/{subscription_exposed_id}`
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
    "customer",
    "subscription_exposed_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "customer": z.string().max(5000),
  "subscription_exposed_id": z.string().max(5000)
}