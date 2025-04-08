import { z } from "zod"

export const toolName = `mergeversions`
export const toolDescription = `Merge versions`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/version/{id}/mergeto/{moveIssuesTo}`
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
    "id",
    "moveIssuesTo"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "id": z.string().describe("The ID of the version to delete."),
  "moveIssuesTo": z.string().describe("The ID of the version to merge into.")
}