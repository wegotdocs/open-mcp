import { z } from "zod"

export const toolName = `getprojectversionspaginated`
export const toolDescription = `Get project versions paginated`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/project/{projectIdOrKey}/version`
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

export const inputParams = z.object({ "p_projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."), "q_startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "q_maxResults": z.number().int().describe("The maximum number of items to return per page."), "q_orderBy": z.enum(["description","-description","+description","name","-name","+name","releaseDate","-releaseDate","+releaseDate","sequence","-sequence","+sequence","startDate","-startDate","+startDate"]).describe("[Order](#ordering) the results by a field:\n\n *  `description` Sorts by version description.\n *  `name` Sorts by version name.\n *  `releaseDate` Sorts by release date, starting with the oldest date. Versions with no release date are listed last.\n *  `sequence` Sorts by the order of appearance in the user interface.\n *  `startDate` Sorts by start date, starting with the oldest date. Versions with no start date are listed last.").optional(), "q_query": z.string().describe("Filter the results using a literal string. Versions with matching `name` or `description` are returned (case insensitive).").optional(), "q_status": z.string().describe("A list of status values used to filter the results by version status. This parameter accepts a comma-separated list. The status values are `released`, `unreleased`, and `archived`.").optional(), "q_expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `issuesstatus` Returns the number of issues in each status category for each version.\n *  `operations` Returns actions that can be performed on the specified version.\n *  `driver` Returns the Atlassian account ID of the version driver.\n *  `approvers` Returns a list containing the approvers for this version.").optional() }).shape