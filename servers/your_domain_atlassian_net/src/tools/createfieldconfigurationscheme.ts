import { z } from "zod"

export const toolName = `createfieldconfigurationscheme`
export const toolDescription = `Create field configuration scheme`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/fieldconfigurationscheme`
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

export const inputParams = z.object({ "b_description": z.string().max(1024).describe("The description of the field configuration scheme.").optional(), "b_name": z.string().max(255).describe("The name of the field configuration scheme. The name must be unique.") }).shape