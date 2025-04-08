import { z } from "zod"

export const toolName = `addscreentabfield`
export const toolDescription = `Add screen tab field`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/screens/{screenId}/tabs/{tabId}/fields`
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
  "path": [
    "screenId",
    "tabId"
  ],
  "cookie": [],
  "body": [
    "fieldId"
  ]
}
export const flatMap = {}

export const inputParams = {
  "screenId": z.number().int().describe("The ID of the screen."),
  "tabId": z.number().int().describe("The ID of the screen tab."),
  "fieldId": z.string().describe("The ID of the field to add.")
}