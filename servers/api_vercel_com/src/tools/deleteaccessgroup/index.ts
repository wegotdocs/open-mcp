export { inputParams } from "./schema/root.js"

export const toolName = `deleteaccessgroup`
export const toolDescription = `Deletes an access group`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/access-groups/{idOrName}`
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
    "idOrName"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}