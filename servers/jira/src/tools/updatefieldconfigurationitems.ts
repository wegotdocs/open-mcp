import { z } from "zod"

export const toolName = `updatefieldconfigurationitems`
export const toolDescription = `Update field configuration items`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/fieldconfiguration/{id}/fields`
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
    "fieldConfigurationItems"
  ]
}
export const flatMap = {}

export const inputParams = {
  "id": z.number().int().describe("The ID of the field configuration."),
  "fieldConfigurationItems": z.array(z.object({ "description": z.string().describe("The description of the field within the field configuration.").optional(), "id": z.string().describe("The ID of the field within the field configuration."), "isHidden": z.boolean().describe("Whether the field is hidden in the field configuration.").optional(), "isRequired": z.boolean().describe("Whether the field is required in the field configuration.").optional(), "renderer": z.string().describe("The renderer type for the field within the field configuration.").optional() }).strict().describe("A field within a field configuration.")).describe("Details of fields in a field configuration.")
}