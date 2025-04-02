import { z } from "zod"

export const toolName = `getprojectcomponentspaginated`
export const toolDescription = `Get project components paginated`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/project/{projectIdOrKey}/component`
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
    "orderBy",
    "componentSource",
    "query"
  ],
  "header": [],
  "path": [
    "projectIdOrKey"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."), "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "maxResults": z.number().int().describe("The maximum number of items to return per page."), "orderBy": z.enum(["description","-description","+description","issueCount","-issueCount","+issueCount","lead","-lead","+lead","name","-name","+name"]).describe("[Order](#ordering) the results by a field:\n\n *  `description` Sorts by the component description.\n *  `issueCount` Sorts by the count of issues associated with the component.\n *  `lead` Sorts by the user key of the component's project lead.\n *  `name` Sorts by component name.").optional(), "componentSource": z.enum(["jira","compass","auto"]).describe("The source of the components to return. Can be `jira` (default), `compass` or `auto`. When `auto` is specified, the API will return connected Compass components if the project is opted into Compass, otherwise it will return Jira components. Defaults to `jira`."), "query": z.string().describe("Filter the results using a literal string. Components with a matching `name` or `description` are returned (case insensitive).").optional() }).shape