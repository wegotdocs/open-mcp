import { z } from "zod"

export const toolName = `getaccessibleprojecttypebykey`
export const toolDescription = `Get accessible project type by key`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/project/type/{projectTypeKey}/accessible`
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
    "projectTypeKey"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "projectTypeKey": z.enum(["software","service_desk","business","product_discovery"]).describe("The key of the project type.")
}