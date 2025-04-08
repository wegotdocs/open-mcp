import { z } from "zod"

export const toolName = `updateremoteissuelink`
export const toolDescription = `Update remote issue link by ID`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId}`
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
    "issueIdOrKey",
    "linkId"
  ],
  "cookie": [],
  "body": [
    "application",
    "globalId",
    "object",
    "relationship"
  ]
}
export const flatMap = {}

export const inputParams = {
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "linkId": z.string().describe("The ID of the remote issue link."),
  "application": z.string().optional(),
  "globalId": z.string().describe("An identifier for the remote item in the remote system. For example, the global ID for a remote item in Confluence would consist of the app ID and page ID, like this: `appId=456&pageId=123`.\n\nSetting this field enables the remote issue link details to be updated or deleted using remote system and item details as the record identifier, rather than using the record's Jira ID.\n\nThe maximum length is 255 characters.").optional(),
  "object": z.string(),
  "relationship": z.string().describe("Description of the relationship between the issue and the linked item. If not set, the relationship description \"links to\" is used in Jira.").optional()
}