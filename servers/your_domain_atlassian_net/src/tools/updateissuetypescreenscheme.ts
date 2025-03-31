import { z } from "zod"

export const toolName = `updateissuetypescreenscheme`
export const toolDescription = `Update issue type screen scheme`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}`
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

export const inputParams = z.object({ "p_issueTypeScreenSchemeId": z.string().describe("The ID of the issue type screen scheme."), "b_description": z.string().describe("The description of the issue type screen scheme. The maximum length is 255 characters.").optional(), "b_name": z.string().describe("The name of the issue type screen scheme. The name must be unique. The maximum length is 255 characters.").optional() }).shape