export { inputParams } from "./schema/root.js"

export const toolName = `droplets_list_supported_backup_policies`
export const toolDescription = `List Supported Droplet Backup Policies`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/droplets/backups/supported_policies`
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