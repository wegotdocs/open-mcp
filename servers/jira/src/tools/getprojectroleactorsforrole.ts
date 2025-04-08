import { z } from "zod"

export const toolName = `getprojectroleactorsforrole`
export const toolDescription = `Get default actors for project role`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/role/{id}/actors`
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
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.")
}