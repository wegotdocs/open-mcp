import { z } from "zod"

export const toolName = `getprecomputationsbyid`
export const toolDescription = `Get precomputations by ID (apps)`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/jql/function/computation/search`
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
  "query": [
    "orderBy"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "precomputationIDs"
  ]
}
export const flatMap = {}

export const inputParams = {
  "orderBy": z.string().describe("[Order](#ordering) the results by a field:\n\n *  `functionKey` Sorts by the functionKey.\n *  `used` Sorts by the used timestamp.\n *  `created` Sorts by the created timestamp.\n *  `updated` Sorts by the updated timestamp.").optional(),
  "precomputationIDs": z.array(z.string()).optional()
}