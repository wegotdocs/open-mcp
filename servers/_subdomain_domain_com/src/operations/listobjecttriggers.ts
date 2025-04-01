import { z } from "zod"

export const toolName = `listobjecttriggers`
export const toolDescription = `List Object Triggers`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/custom_objects/{custom_object_key}/triggers`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]

export const inputParams = z.object({ "query": z.object({ "active": z.boolean().describe("Filter by active triggers if true or inactive triggers if false").optional(), "sort_by": z.string().describe("Offset pagination only. Possible values are \"alphabetical\", \"created_at\", \"updated_at\", \"usage_1h\", \"usage_24h\", or \"usage_7d\". Defaults to \"position\"").optional(), "sort_order": z.string().describe("One of \"asc\" or \"desc\". Defaults to \"asc\" for alphabetical and position sort, \"desc\" for all others").optional() }).optional() }).shape