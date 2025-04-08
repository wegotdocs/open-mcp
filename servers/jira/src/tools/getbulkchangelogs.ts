import { z } from "zod"

export const toolName = `getbulkchangelogs`
export const toolDescription = `Bulk fetch changelogs`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/changelog/bulkfetch`
export const method = `post`
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
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "fieldIds",
    "issueIdsOrKeys",
    "maxResults",
    "nextPageToken"
  ]
}
export const flatMap = {}

export const inputParams = {
  "fieldIds": z.array(z.string().describe("List of field IDs to filter changelogs")).min(0).max(10).describe("List of field IDs to filter changelogs").optional(),
  "issueIdsOrKeys": z.array(z.string().describe("List of issue IDs/keys to fetch changelogs for")).min(1).max(1000).describe("List of issue IDs/keys to fetch changelogs for"),
  "maxResults": z.number().int().gte(1).lte(10000).describe("The maximum number of items to return per page").optional(),
  "nextPageToken": z.string().describe("The cursor for pagination").optional()
}