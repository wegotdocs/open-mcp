import { z } from "zod"

export const toolName = `searchworkflows`
export const toolDescription = `Search workflows`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/workflows/search`
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
export const keys = {
  "query": [
    "startAt",
    "maxResults",
    "expand",
    "queryString",
    "orderBy",
    "scope",
    "isActive"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(), "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(), "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `values.transitions` Returns the transitions that each workflow is associated with.").optional(), "queryString": z.string().describe("String used to perform a case-insensitive partial match with workflow name.").optional(), "orderBy": z.string().describe("[Order](#ordering) the results by a field:\n\n *  `name` Sorts by workflow name.\n *  `created` Sorts by create time.\n *  `updated` Sorts by update time.").optional(), "scope": z.string().describe("The scope of the workflow. Global for company-managed projects and Project for team-managed projects.").optional(), "isActive": z.boolean().describe("Filters active and inactive workflows.").optional() }).shape