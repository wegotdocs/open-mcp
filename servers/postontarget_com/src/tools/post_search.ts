import { z } from "zod"

export const toolName = `post_search`
export const toolDescription = `Find company records`
export const baseUrl = `https://postontarget.com`
export const path = `/search`
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
    "query"
  ]
}
export const flatMap = {}

export const inputParams = {
  "query": z.object({ "country_code": z.string().describe("Code of the country where you want to search for personal data").optional(), "admin1_code": z.string().describe("Code of the region where you want to search for data").optional(), "admin2_code": z.string().describe("Code of the province where you want to search for data").optional(), "dipendenti": z.string().describe("Range of employed employees who must have the company").optional(), "fatturato": z.string().describe("Range of turnover in which the company must be included").optional(), "forma_giuridica_id": z.number().int().describe("Legal form identifier that the company must have").optional(), "macro_id": z.number().int().describe("Commodity macro-category identifier to which the company must belong").optional(), "micro_id": z.number().int().describe("Commodity macro-category identifier to which the company must belong").optional() })
}