import { z } from "zod"

export const toolName = `getcommentsbyids`
export const toolDescription = `Get comments by IDs`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/comment/list`
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
    "expand"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "ids"
  ]
}
export const flatMap = {}

export const inputParams = {
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `renderedBody` Returns the comment body rendered in HTML.\n *  `properties` Returns the comment's properties.").optional(),
  "ids": z.array(z.number().int()).describe("The list of comment IDs. A maximum of 1000 IDs can be specified.")
}