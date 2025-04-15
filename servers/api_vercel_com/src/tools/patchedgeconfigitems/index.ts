export { inputParams } from "./schema/root.js"

export const toolName = `patchedgeconfigitems`
export const toolDescription = `Update Edge Config items in batch`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/edge-config/{edgeConfigId}/items`
export const method = `patch`
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
    "dryRun",
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "edgeConfigId"
  ],
  "cookie": [],
  "body": [
    "items",
    "definition"
  ]
}
export const flatMap = {}