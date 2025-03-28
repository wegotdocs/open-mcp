import { z } from "zod"

export const toolName = `list_projects`
export const toolDescription = `Returns a list of projects.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/organization/projects`
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

export const inputParams = z.object({ "query": z.object({ "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.\n"), "after": z.string().describe("A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.\n").optional(), "include_archived": z.boolean().describe("If `true` returns all projects including those that have been `archived`. Archived projects are not included by default.") }).optional() }).shape