export { inputParams } from "./schema/root.js"

export const toolName = `vpcs_list_members`
export const toolDescription = `List the Member Resources of a VPC`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/vpcs/{vpc_id}/members`
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
    "resource_type",
    "per_page",
    "page"
  ],
  "header": [],
  "path": [
    "vpc_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}