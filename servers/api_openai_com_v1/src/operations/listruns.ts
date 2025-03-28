import { z } from "zod"

export const toolName = `listruns`
export const toolDescription = `Returns a list of runs belonging to a thread.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/threads/{thread_id}/runs`
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

export const inputParams = z.object({ "path": z.object({ "thread_id": z.string().describe("The ID of the thread the run belongs to.") }).optional(), "query": z.object({ "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n"), "order": z.enum(["asc","desc"]).describe("Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.\n"), "after": z.string().describe("A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional(), "before": z.string().describe("A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.\n").optional() }).optional() }).shape