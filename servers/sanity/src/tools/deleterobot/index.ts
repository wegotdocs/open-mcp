export { inputParams } from "./schema/root.js"

export const toolName = `deleterobot`
export const toolDescription = `Delete robot and associated token`
export const baseUrl = `https://api.sanity.io`
export const path = `/vX/access/{resourceType}/{resourceId}/robots/{robotId}`
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
    "resourceType",
    "resourceId",
    "robotId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}