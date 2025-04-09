export { inputParams } from "./schema/root.js"

export const toolName = `domains_create_record`
export const toolDescription = `Create a New Domain Record`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/domains/{domain_name}/records`
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
    "domain_name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}