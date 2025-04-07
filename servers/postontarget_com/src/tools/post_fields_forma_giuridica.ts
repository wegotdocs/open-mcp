import { z } from "zod"

export const toolName = `post_fields_forma_giuridica`
export const toolDescription = `List of corporate legal forms`
export const baseUrl = `https://postontarget.com`
export const path = `/fields/forma_giuridica`
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
  "query": z.object({ "ID": z.number().int().optional(), "forma_giuridica": z.string().optional(), "country_code": z.string().optional() }).optional()
}