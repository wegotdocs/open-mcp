export { inputParams } from "./schema/root.js"

export const toolName = `listaccessgroups`
export const toolDescription = `List access groups for a team, project or member`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/access-groups`
export const method = `get`
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
  "query": [
    "projectId",
    "search",
    "membersLimit",
    "projectsLimit",
    "limit",
    "next",
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}