export { inputParams } from "./schema/root.js"

export const toolName = `editprojectenv`
export const toolDescription = `Edit an environment variable`
export const baseUrl = `https://api.vercel.com`
export const path = `/v9/projects/{idOrName}/env/{id}`
export const method = `patch`
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
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "idOrName",
    "id"
  ],
  "cookie": [],
  "body": [
    "key",
    "target",
    "gitBranch",
    "type",
    "value",
    "customEnvironmentIds",
    "comment"
  ]
}
export const flatMap = {}