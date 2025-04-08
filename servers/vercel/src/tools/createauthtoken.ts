import { z } from "zod"

export const toolName = `createauthtoken`
export const toolDescription = `Create an Auth Token`
export const baseUrl = `https://api.vercel.com`
export const path = `/v3/user/tokens`
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
  "path": [],
  "cookie": [],
  "body": [
    "name",
    "expiresAt"
  ]
}
export const flatMap = {}

export const inputParams = {
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "name": z.string(),
  "expiresAt": z.number().optional()
}