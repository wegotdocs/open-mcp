import { z } from "zod"

export const toolName = `bulksetissueproperty`
export const toolDescription = `Bulk set issue property`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issue/properties/{propertyKey}`
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
    "propertyKey"
  ],
  "cookie": [],
  "body": [
    "expression",
    "filter",
    "value"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "propertyKey": z.string().describe("The key of the property. The maximum length is 255 characters."), "expression": z.string().describe("EXPERIMENTAL. The Jira expression to calculate the value of the property. The value of the expression must be an object that can be converted to JSON, such as a number, boolean, string, list, or map. The context variables available to the expression are `issue` and `user`. Issues for which the expression returns a value whose JSON representation is longer than 32768 characters are ignored.").optional(), "filter": z.string().optional(), "value": z.any().describe("The value of the property. The value must be a [valid](https://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.").optional() }).shape