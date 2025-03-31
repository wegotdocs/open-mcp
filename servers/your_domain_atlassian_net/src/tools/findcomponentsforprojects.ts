import { z } from "zod"

export const toolName = `findcomponentsforprojects`
export const toolDescription = `Find components for projects`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/component`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "q_projectIdsOrKeys": z.array(z.string()).describe("The project IDs and/or project keys (case sensitive).").optional(), "q_startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "q_maxResults": z.number().int().describe("The maximum number of items to return per page."), "q_orderBy": z.enum(["description","-description","+description","name","-name","+name"]).describe("[Order](#ordering) the results by a field:\n\n *  `description` Sorts by the component description.\n *  `name` Sorts by component name.").optional(), "q_query": z.string().describe("Filter the results using a literal string. Components with a matching `name` or `description` are returned (case insensitive).").optional() }).shape