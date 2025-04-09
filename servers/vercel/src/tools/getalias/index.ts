export { inputParams } from "./schema/root.js"

export const toolName = `getalias`
export const toolDescription = `Get an Alias`
export const baseUrl = `https://api.vercel.com`
export const path = `/v4/aliases/{idOrAlias}`
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
    "from",
    "projectId",
    "since",
    "until",
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "idOrAlias"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}