import { z } from "zod"

export const toolName = `list_product_categories`
export const toolDescription = `List product categories`
export const baseUrl = `https://api.codat.io`
export const path = `/companies/{companyId}/connections/{connectionId}/data/commerce-productCategories`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
    "in": "header",
    "envVarName": "AUTHORIZATION",
    "schemeType": "apiKey",
    "schemeName": "Authorization"
  }
]

export const inputParams = z.object({ "query": z.object({ "page": z.number().int().gte(0).describe("Page number. [Read more](https://docs.codat.io/using-the-api/paging)."), "pageSize": z.number().int().gte(1).lte(5000).describe("Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging)."), "query": z.string().describe("Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).").optional(), "orderBy": z.string().describe("Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).").optional() }).optional() }).shape