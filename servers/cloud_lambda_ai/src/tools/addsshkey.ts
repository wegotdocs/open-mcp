import { z } from "zod"

export const toolName = `addsshkey`
export const toolDescription = `Add an SSH key`
export const baseUrl = `https://cloud.lambda.ai`
export const path = `/api/v1/ssh-keys`
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
    "name",
    "public_key"
  ]
}
export const flatMap = {}

export const inputParams = {
  "name": z.string().min(1).max(64).describe("The name of the SSH key."),
  "public_key": z.string().min(1).max(4096).describe("The public key for the SSH key.").optional()
}