import { z } from "zod"

export const toolName = `admin_api_keys_list`
export const toolDescription = `List organization API keys`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/organization/admin_api_keys`
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

export const inputParams = z.object({ "query": z.object({ "after": z.string().nullable().describe("Return keys with IDs that come after this ID in the pagination order.").optional(), "order": z.enum(["asc","desc"]).describe("Order results by creation time, ascending or descending."), "limit": z.number().int().describe("Maximum number of keys to return.") }).optional() }).shape