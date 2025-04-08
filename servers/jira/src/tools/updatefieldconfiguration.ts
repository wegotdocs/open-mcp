import { z } from "zod"

export const toolName = `updatefieldconfiguration`
export const toolDescription = `Update field configuration`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/fieldconfiguration/{id}`
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
    "id"
  ],
  "cookie": [],
  "body": [
    "description",
    "name"
  ]
}
export const flatMap = {}

export const inputParams = {
  "id": z.number().int().describe("The ID of the field configuration."),
  "description": z.string().max(255).describe("The description of the field configuration.").optional(),
  "name": z.string().max(255).describe("The name of the field configuration. Must be unique.")
}