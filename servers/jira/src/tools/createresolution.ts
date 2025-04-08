import { z } from "zod"

export const toolName = `createresolution`
export const toolDescription = `Create resolution`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/resolution`
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
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "description",
    "name"
  ]
}
export const flatMap = {}

export const inputParams = {
  "description": z.string().max(255).describe("The description of the resolution.").optional(),
  "name": z.string().max(60).describe("The name of the resolution. Must be unique (case-insensitive).")
}