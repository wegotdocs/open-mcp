import { z } from "zod"

export const toolName = `eventlogsall`
export const toolDescription = `List event logs`
export const baseUrl = `https://unify.apideck.com`
export const path = `/webhook/logs`
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

export const inputParams = z.object({ "header": z.object({ "x-apideck-app-id": z.string().describe("The ID of your Unify application") }).optional(), "query": z.object({ "cursor": z.string().nullable().describe("Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.").optional(), "limit": z.number().int().gte(1).lte(200).describe("Number of results to return. Minimum 1, Maximum 200, Default 20"), "filter": z.object({ "consumer_id": z.string().nullable().optional(), "entity_type": z.string().nullable().optional(), "event_type": z.string().nullable().optional(), "exclude_apis": z.string().nullable().optional(), "service": z.object({ "id": z.string().optional() }).nullable().optional() }).describe("Filter results").optional() }).optional() }).shape