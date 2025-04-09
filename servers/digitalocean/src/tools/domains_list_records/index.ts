export { inputParams } from "./schema/root.js"

export const toolName = `domains_list_records`
export const toolDescription = `List All Domain Records`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/domains/{domain_name}/records`
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
    "name",
    "type",
    "per_page",
    "page"
  ],
  "header": [],
  "path": [
    "domain_name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}