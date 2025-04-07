import { z } from "zod"

export const toolName = `post_fields_microcategorie`
export const toolDescription = `List of micro-commercial categories`
export const baseUrl = `https://postontarget.com`
export const path = `/fields/microcategorie`
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
  "query": z.object({ "ID": z.number().int().optional(), "micro_name_IT": z.string().optional(), "micro_name_EN": z.string().optional(), "id_macro": z.number().int().optional() }).optional()
}