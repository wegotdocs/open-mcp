export { inputParams } from "./schema/root.js"

export const toolName = `updateprojectdomain`
export const toolDescription = `Update a project domain`
export const baseUrl = `https://api.vercel.com`
export const path = `/v9/projects/{idOrName}/domains/{domain}`
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
    "domain"
  ],
  "cookie": [],
  "body": [
    "gitBranch",
    "redirect",
    "redirectStatusCode"
  ]
}
export const flatMap = {}