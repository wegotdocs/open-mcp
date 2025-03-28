import { z } from "zod"

export const toolName = `listfiles`
export const toolDescription = `Returns a list of files.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/files`
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

export const inputParams = z.object({ "query": z.object({ "purpose": z.string().describe("Only return files with the given purpose.").optional(), "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 10,000, and the default is 10,000.\n"), "order": z.enum(["asc","desc"]).describe("Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.\n"), "after": z.string().describe("A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional() }).optional() }).shape