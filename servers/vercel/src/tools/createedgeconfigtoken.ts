import { z } from "zod"

export const toolName = `createedgeconfigtoken`
export const toolDescription = `Create an Edge Config token`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/edge-config/{edgeConfigId}/token`
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
  "query": [
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "edgeConfigId"
  ],
  "cookie": [],
  "body": [
    "label"
  ]
}
export const flatMap = {}

export const inputParams = {
  "edgeConfigId": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "label": z.string().max(52)
}