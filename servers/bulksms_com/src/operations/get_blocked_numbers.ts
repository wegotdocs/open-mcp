import { z } from "zod"

export const toolName = `get_blocked_numbers`
export const toolDescription = `List blocked numbers`
export const baseUrl = `https://api.bulksms.com/v1`
export const path = `/blocked-numbers`
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

export const inputParams = z.object({ "query": z.object({ "min-id": z.number().int().describe("Records with an `id` that is greater or equal to min-id will be returned. The default value is `0`.  You can add 1 to an id that you previously retrieved, to return subsequent records.").optional(), "limit": z.number().int().describe("The maximum number of records to return. The default value is `10000`. The value cannot be greater than 10000.").optional() }).optional() }).shape