import { z } from "zod"

export const toolName = `get_v1_experimentation_items`
export const toolDescription = `Query experimentation items`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/experimentation/items`
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
    "resourceId"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "resourceId": z.string().optional() }).shape