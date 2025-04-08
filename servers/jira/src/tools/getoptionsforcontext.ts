import { z } from "zod"

export const toolName = `getoptionsforcontext`
export const toolDescription = `Get custom field options (context)`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/field/{fieldId}/context/{contextId}/option`
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
  "query": [
    "optionId",
    "onlyOptions",
    "startAt",
    "maxResults"
  ],
  "header": [],
  "path": [
    "fieldId",
    "contextId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "fieldId": z.string().describe("The ID of the custom field."),
  "contextId": z.number().int().describe("The ID of the context."),
  "optionId": z.number().int().describe("The ID of the option.").optional(),
  "onlyOptions": z.boolean().describe("Whether only options are returned.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
}