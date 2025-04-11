export { inputParams } from "./schema/root.js"

export const toolName = `post_group_unassign`
export const toolDescription = `Unassign a placement group`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/placement/groups/{groupId}/unassign`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
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
  "path": [],
  "cookie": [],
  "body": [
    "linodes"
  ]
}
export const flatMap = {}