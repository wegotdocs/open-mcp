import { z } from "zod"

export const toolName = `addschema`
export const toolDescription = `Add new schema`
export const baseUrl = `https://api.example.com`
export const path = `/api/v1/server/schema`
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
  "path": [],
  "cookie": [],
  "body": [
    "schema",
    "context"
  ]
}
export const flatMap = {}

export const inputParams = {
  "schema": z.string().describe("A JSON-encoded string representing the schema object to be posted.").optional(),
  "context": z.string().describe("The name or context of the schema, identifying the scope or purpose for which it is used.").optional()
}