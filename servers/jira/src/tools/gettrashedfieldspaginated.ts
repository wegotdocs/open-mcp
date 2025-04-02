import { z } from "zod"

export const toolName = `gettrashedfieldspaginated`
export const toolDescription = `Get fields in trash paginated`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/field/search/trashed`
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
    "id",
    "query",
    "expand",
    "orderBy"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "maxResults": z.number().int().describe("The maximum number of items to return per page."), "id": z.array(z.string()).optional(), "query": z.string().describe("String used to perform a case-insensitive partial match with field names or descriptions.").optional(), "expand": z.enum(["name","-name","+name","trashDate","-trashDate","+trashDate","plannedDeletionDate","-plannedDeletionDate","+plannedDeletionDate","projectsCount","-projectsCount","+projectsCount"]).optional(), "orderBy": z.string().describe("[Order](#ordering) the results by a field:\n\n *  `name` sorts by the field name\n *  `trashDate` sorts by the date the field was moved to the trash\n *  `plannedDeletionDate` sorts by the planned deletion date").optional() }).shape