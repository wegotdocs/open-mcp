export { inputParams } from "./schema/root.js"

export const toolName = `getedgeconfig`
export const toolDescription = `Get an Edge Config`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/edge-config/{edgeConfigId}`
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
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "edgeConfigId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}