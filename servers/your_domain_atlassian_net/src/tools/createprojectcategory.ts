import { z } from "zod"

export const toolName = `createprojectcategory`
export const toolDescription = `Create project category`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/projectCategory`
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

export const inputParams = z.object({ "b_description": z.string().describe("The description of the project category.").optional(), "b_id": z.string().describe("The ID of the project category.").readonly().optional(), "b_name": z.string().describe("The name of the project category. Required on create, optional on update.").optional(), "b_self": z.string().url().describe("The URL of the project category.").readonly().optional() }).shape