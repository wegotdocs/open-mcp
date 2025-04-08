import { z } from "zod"

export const toolName = `createissuesecurityscheme`
export const toolDescription = `Create issue security scheme`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issuesecurityschemes`
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
  "path": [],
  "cookie": [],
  "body": [
    "description",
    "levels",
    "name"
  ]
}
export const flatMap = {}

export const inputParams = {
  "description": z.string().max(255).describe("The description of the issue security scheme.").optional(),
  "levels": z.array(z.object({ "description": z.string().max(4000).describe("The description of the issue security scheme level.").optional(), "isDefault": z.boolean().describe("Specifies whether the level is the default level. False by default.").optional(), "members": z.array(z.object({ "parameter": z.string().describe("The value corresponding to the specified member type.").optional(), "type": z.string().describe("The issue security level member type, e.g `reporter`, `group`, `user`, `projectrole`, `applicationRole`.") }).strict()).describe("The list of level members which should be added to the issue security scheme level.").optional(), "name": z.string().max(255).describe("The name of the issue security scheme level. Must be unique.") }).strict()).describe("The list of scheme levels which should be added to the security scheme.").optional(),
  "name": z.string().max(60).describe("The name of the issue security scheme. Must be unique (case-insensitive).")
}