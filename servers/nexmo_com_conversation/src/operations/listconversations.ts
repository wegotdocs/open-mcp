import { z } from "zod"

export const toolName = `listconversations`
export const toolDescription = `List conversations`
export const baseUrl = `https://api.nexmo.com/v0.1`
export const path = `/conversations`
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

export const inputParams = z.object({ "query": z.object({ "date_start": z.string().describe("Return the records that occurred after this point in time.").optional(), "date_end": z.string().describe("Return the records that occurred before this point in time.").optional(), "page_size": z.number().gte(1).lte(100).describe("The amount of records returned in this response"), "record_index": z.number().gte(0).describe("Return `page_size` amount of conversations from this index in the response. That is, if your request returns 300 conversations, set `record_index` to 5 in order to return conversations 50 to 59. The default value is 0. That is, the first `page_size` calls."), "order": z.enum(["asc","desc","ASC","DESC"]).describe("Return the records in ascending or descending order.") }).optional() }).shape