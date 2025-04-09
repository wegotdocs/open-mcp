export { inputParams } from "./schema/root.js"

export const toolName = `post_plants`
export const toolDescription = `Creates a new plant in the store`
export const baseUrl = `http://sandbox.mintlify.com`
export const path = `/plants`
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
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}