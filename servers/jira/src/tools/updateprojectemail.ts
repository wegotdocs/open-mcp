import { z } from "zod"

export const toolName = `updateprojectemail`
export const toolDescription = `Set project's sender email`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/project/{projectId}/email`
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
    "projectId"
  ],
  "cookie": [],
  "body": [
    "emailAddress",
    "emailAddressStatus"
  ]
}
export const flatMap = {}

export const inputParams = {
  "projectId": z.number().int().describe("The project ID."),
  "emailAddress": z.string().describe("The email address.").optional(),
  "emailAddressStatus": z.array(z.string()).describe("When using a custom domain, the status of the email address.").optional()
}