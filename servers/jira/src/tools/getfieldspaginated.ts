import { z } from "zod"

export const toolName = `getfieldspaginated`
export const toolDescription = `Get fields paginated`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/field/search`
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
    "type",
    "id",
    "query",
    "orderBy",
    "expand",
    "projectIds"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "type": z.array(z.enum(["custom","system"])).describe("The type of fields to search.").optional(),
  "id": z.array(z.string()).describe("The IDs of the custom fields to return or, where `query` is specified, filter.").optional(),
  "query": z.string().describe("String used to perform a case-insensitive partial match with field names or descriptions.").optional(),
  "orderBy": z.enum(["contextsCount","-contextsCount","+contextsCount","lastUsed","-lastUsed","+lastUsed","name","-name","+name","screensCount","-screensCount","+screensCount","projectsCount","-projectsCount","+projectsCount"]).describe("[Order](#ordering) the results by:\n\n *  `contextsCount` sorts by the number of contexts related to a field\n *  `lastUsed` sorts by the date when the value of the field last changed\n *  `name` sorts by the field name\n *  `screensCount` sorts by the number of screens related to a field").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `key` returns the key for each field\n *  `stableId` returns the stableId for each field\n *  `lastUsed` returns the date when the value of the field last changed\n *  `screensCount` returns the number of screens related to a field\n *  `contextsCount` returns the number of contexts related to a field\n *  `isLocked` returns information about whether the field is locked\n *  `searcherKey` returns the searcher key for each custom field").optional(),
  "projectIds": z.array(z.number().int()).optional()
}