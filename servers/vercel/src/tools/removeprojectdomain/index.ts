export { inputParams } from "./schema/root.js"

export const toolName = `removeprojectdomain`
export const toolDescription = `Remove a domain from a project`
export const baseUrl = `https://api.vercel.com`
export const path = `/v9/projects/{idOrName}/domains/{domain}`
export const method = `delete`
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
  "body": []
}
export const flatMap = {}