export { inputParams } from "./schema/root.js"

export const toolName = `apps_list_instancesizes`
export const toolDescription = `List Instance Sizes`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps/tiers/instance_sizes`
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
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}