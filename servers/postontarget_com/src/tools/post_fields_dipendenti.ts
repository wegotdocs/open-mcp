import { z } from "zod"

export const toolName = `post_fields_dipendenti`
export const toolDescription = `List of number of employees`
export const baseUrl = `https://postontarget.com`
export const path = `/fields/dipendenti`
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
    "limit",
    "query"
  ]
}
export const flatMap = {}

export const inputParams = {
  "limit": z.number().int().optional(),
  "query": z.object({ "dipendenti": z.string().optional() }).optional()
}