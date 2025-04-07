import { z } from "zod"

export const toolName = `postinstance`
export const toolDescription = `Update instance details`
export const baseUrl = `https://cloud.lambda.ai`
export const path = `/api/v1/instances/{id}`
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
    "id"
  ],
  "cookie": [],
  "body": [
    "name"
  ]
}
export const flatMap = {}

export const inputParams = {
  "id": z.string().describe("The unique identifier (ID) of the instance"),
  "name": z.string().min(0).max(64).describe("The new, user-provided name for the instance.").optional()
}