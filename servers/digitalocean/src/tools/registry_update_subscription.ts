import { z } from "zod"

export const toolName = `registry_update_subscription`
export const toolDescription = `Update Subscription Tier`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/registry/subscription`
export const method = `post`
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
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "tier_slug"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "tier_slug": z.enum(["starter","basic","professional"]).describe("The slug of the subscription tier to sign up for.").optional() }).shape