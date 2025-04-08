import { z } from "zod"

export const toolName = `getmyrequests`
export const toolDescription = `List all request for current user`
export const baseUrl = `https://api.sanity.io`
export const path = `/v2024-07-01/access/requests/me`
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
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {}