import { z } from "zod"

export const toolName = `postcouponscoupon`
export const toolDescription = `Update a coupon`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/coupons/{coupon}`
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
    "coupon"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "coupon": z.string().max(5000)
}