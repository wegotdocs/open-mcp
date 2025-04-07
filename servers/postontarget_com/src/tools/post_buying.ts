import { z } from "zod"

export const toolName = `post_buying`
export const toolDescription = `Purchase of personal data`
export const baseUrl = `https://postontarget.com`
export const path = `/buying`
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
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "id_request",
    "records"
  ]
}
export const flatMap = {}

export const inputParams = {
  "id_request": z.string().describe("Request identifier returned after performing a POST Search").optional(),
  "records": z.number().int().describe("Number of records that you want to buy").optional()
}