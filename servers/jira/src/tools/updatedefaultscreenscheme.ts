import { z } from "zod"

export const toolName = `updatedefaultscreenscheme`
export const toolDescription = `Update issue type screen scheme default screen scheme`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping/default`
export const method = `put`
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
  "path": [
    "issueTypeScreenSchemeId"
  ],
  "cookie": [],
  "body": [
    "screenSchemeId"
  ]
}
export const flatMap = {}

export const inputParams = {
  "issueTypeScreenSchemeId": z.string().describe("The ID of the issue type screen scheme."),
  "screenSchemeId": z.string().describe("The ID of the screen scheme.")
}