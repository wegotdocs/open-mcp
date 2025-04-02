import { z } from "zod"

export const toolName = `removelevel`
export const toolDescription = `Remove issue security level`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issuesecurityschemes/{schemeId}/level/{levelId}`
export const method = `delete`
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
    "replaceWith"
  ],
  "header": [],
  "path": [
    "schemeId",
    "levelId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "schemeId": z.string().describe("The ID of the issue security scheme."), "levelId": z.string().describe("The ID of the issue security level to remove."), "replaceWith": z.string().describe("The ID of the issue security level that will replace the currently selected level.").optional() }).shape