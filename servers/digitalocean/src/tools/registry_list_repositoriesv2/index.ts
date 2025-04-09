export { inputParams } from "./schema/root.js"

export const toolName = `registry_list_repositoriesv2`
export const toolDescription = `List All Container Registry Repositories (V2)`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/registry/{registry_name}/repositoriesV2`
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
    "per_page",
    "page",
    "page_token"
  ],
  "header": [],
  "path": [
    "registry_name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}