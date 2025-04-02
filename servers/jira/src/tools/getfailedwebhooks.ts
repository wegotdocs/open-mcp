import { z } from "zod"

export const toolName = `getfailedwebhooks`
export const toolDescription = `Get failed webhooks`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/webhook/failed`
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
    "maxResults",
    "after"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "maxResults": z.number().int().describe("The maximum number of webhooks to return per page. If obeying the maxResults directive would result in records with the same failure time being split across pages, the directive is ignored and all records with the same failure time included on the page.").optional(), "after": z.number().int().describe("The time after which any webhook failure must have occurred for the record to be returned, expressed as milliseconds since the UNIX epoch.").optional() }).shape