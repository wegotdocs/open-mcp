import { z } from "zod"

export const toolName = `stopinterface`
export const toolDescription = `Stop the end point`
export const baseUrl = `https://api.example.com`
export const path = `/api/v1/server/interface/{endpoint}/stop`
export const method = `put`
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
    "endpoint"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "endpoint": z.string()
}