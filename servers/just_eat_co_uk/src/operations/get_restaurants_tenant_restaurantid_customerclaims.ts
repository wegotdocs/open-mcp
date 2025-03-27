import { z } from "zod"

export const toolName = `get_restaurants_tenant_restaurantid_customerclaims`
export const toolDescription = `Get claims`
export const baseUrl = `https://uk.api.just-eat.io`
export const path = `/restaurants/{tenant}/{restaurantId}/customerclaims`
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

export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("Two letter code indicating the tenant"), "restaurantId": z.string().describe("Just Eat restaurant identifier") }).optional(), "query": z.object({ "fromDate": z.string().datetime({ offset: true }).nullable().describe("Start date limiter").optional(), "toDate": z.string().datetime({ offset: true }).nullable().describe("End date limiter").optional(), "limit": z.number().int().gte(1).lte(100).nullable().describe("Pagination limit"), "offset": z.number().int().gte(0).nullable().describe("Pagination offset").optional() }).optional(), "header": z.object({ "Accept": z.string().describe("Indicates what type of response client understands and is also used for content type negotiation (if version is specified), otherwise tells the server to return the latest version").optional() }).optional() }).shape