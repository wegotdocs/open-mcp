import { z } from "zod"

export const toolName = `reordercustomfieldoptions`
export const toolDescription = `Reorder custom field options (context)`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/field/{fieldId}/context/{contextId}/option/move`
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
    "fieldId",
    "contextId"
  ],
  "cookie": [],
  "body": [
    "after",
    "customFieldOptionIds",
    "position"
  ]
}
export const flatMap = {}

export const inputParams = {
  "fieldId": z.string().describe("The ID of the custom field."),
  "contextId": z.number().int().describe("The ID of the context."),
  "after": z.string().describe("The ID of the custom field option or cascading option to place the moved options after. Required if `position` isn't provided.").optional(),
  "customFieldOptionIds": z.array(z.string()).describe("A list of IDs of custom field options to move. The order of the custom field option IDs in the list is the order they are given after the move. The list must contain custom field options or cascading options, but not both."),
  "position": z.enum(["First","Last"]).describe("The position the custom field options should be moved to. Required if `after` isn't provided.").optional()
}