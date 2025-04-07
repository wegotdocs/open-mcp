import { z } from "zod"

export const toolName = `post_fields_admin2_geo`
export const toolDescription = `List of provinces`
export const baseUrl = `https://postontarget.com`
export const path = `/fields/admin2_geo`
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
  "query": z.object({ "ID": z.string().optional(), "admin2_name": z.string().optional(), "admin2_name_ascii": z.string().optional(), "country_code": z.string().optional(), "id_admin1": z.string().optional() }).optional()
}