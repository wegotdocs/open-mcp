export { inputParams } from "./schema/root.js"

export const toolName = `monitoring_delete_destination`
export const toolDescription = `Delete Logging Destination`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/monitoring/sinks/destinations/{destination_uuid}`
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
  "query": [],
  "header": [],
  "path": [
    "destination_uuid"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}