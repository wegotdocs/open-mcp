import { z } from "zod"

export const toolName = `getallissuetypeschemes`
export const toolDescription = `Get all issue type schemes`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issuetypescheme`
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

export const inputParams = z.object({ "q_startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "q_maxResults": z.number().int().describe("The maximum number of items to return per page."), "q_id": z.array(z.number().int()).describe("The list of issue type schemes IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.").optional(), "q_orderBy": z.enum(["name","-name","+name","id","-id","+id"]).describe("[Order](#ordering) the results by a field:\n\n *  `name` Sorts by issue type scheme name.\n *  `id` Sorts by issue type scheme ID."), "q_expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `projects` For each issue type schemes, returns information about the projects the issue type scheme is assigned to.\n *  `issueTypes` For each issue type schemes, returns information about the issueTypes the issue type scheme have."), "q_queryString": z.string().describe("String used to perform a case-insensitive partial match with issue type scheme name.") }).shape