export { inputParams } from "./schema/root.js"

export const toolName = `acceptinvite`
export const toolDescription = `Accept invite`
export const baseUrl = `https://api.sanity.io`
export const path = `/vX/access/{resourceType}/{resourceId}/invites/token/{inviteToken}/accept`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "resourceType",
    "resourceId",
    "inviteToken"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}