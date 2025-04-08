import { z } from "zod"

export const toolName = `setapplicationproperty`
export const toolDescription = `Set application property`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/application-properties/{id}`
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
    "b_id",
    "value"
  ]
}
export const flatMap = {
  "b_id": "id"
}

export const inputParams = {
  "id": z.string().describe("The key of the application property to update."),
  "b_id": z.string().describe("The ID of the application property.").optional(),
  "value": z.string().describe("The new value.").optional()
}