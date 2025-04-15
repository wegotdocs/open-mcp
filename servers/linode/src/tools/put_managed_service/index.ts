export { inputParams } from "./schema/root.js"

export const toolName = `put_managed_service`
export const toolDescription = `Update a managed service`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/managed/services/{serviceId}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "address",
    "body",
    "consultation_group",
    "created",
    "credentials",
    "id",
    "label",
    "notes",
    "region",
    "service_type",
    "status",
    "timeout",
    "updated"
  ]
}
export const flatMap = {}