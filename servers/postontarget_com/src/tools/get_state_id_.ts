import { z } from "zod"

export const toolName = `get_state_id_`
export const toolDescription = `Single request`
export const baseUrl = `https://postontarget.com`
export const path = `/state/{_id}`
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
  "path": [
    "_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "_id": z.string().describe("Request / search identifier")
}