import { z } from "zod"

export const toolName = `getissuetypeproperty`
export const toolDescription = `Get issue type property`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey}`
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
  "query": [],
  "header": [],
  "path": [
    "issueTypeId",
    "propertyKey"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "issueTypeId": z.string().describe("The ID of the issue type."),
  "propertyKey": z.string().describe("The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys.")
}