import { z } from "zod"

export const toolName = `getedgeconfigtoken`
export const toolDescription = `Get Edge Config token meta data`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/edge-config/{edgeConfigId}/token/{token}`
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
export const keys = {
  "query": [
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "edgeConfigId",
    "token"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "edgeConfigId": z.string(),
  "token": z.string(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
}