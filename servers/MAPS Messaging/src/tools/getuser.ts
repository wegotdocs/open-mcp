import { z } from "zod"

export const toolName = `getuser`
export const toolDescription = `Get user by username`
export const baseUrl = `https://api.example.com`
export const path = `/api/v1/auth/user/{username}`
export const method = `get`
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
    "username"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "username": z.string()
}