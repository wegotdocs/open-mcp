import { z } from "zod"

export const toolName = `getdefaultvalues`
export const toolDescription = `Get custom field contexts default values`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/field/{fieldId}/context/defaultValue`
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
    "contextId",
    "startAt",
    "maxResults"
  ],
  "header": [],
  "path": [
    "fieldId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "fieldId": z.string().describe("The ID of the custom field, for example `customfield\\_10000`."), "contextId": z.array(z.number().int()).describe("The IDs of the contexts.").optional(), "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "maxResults": z.number().int().describe("The maximum number of items to return per page.") }).shape