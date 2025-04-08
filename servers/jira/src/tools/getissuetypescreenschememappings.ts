import { z } from "zod"

export const toolName = `getissuetypescreenschememappings`
export const toolDescription = `Get issue type screen scheme items`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issuetypescreenscheme/mapping`
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
    "issueTypeScreenSchemeId"
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
  "issueTypeScreenSchemeId": z.array(z.number().int()).describe("The list of issue type screen scheme IDs. To include multiple issue type screen schemes, separate IDs with ampersand: `issueTypeScreenSchemeId=10000&issueTypeScreenSchemeId=10001`.").optional()
}