export { inputParams } from "./schema/root.js"

export const toolName = `genai_list_datacenter_regions`
export const toolDescription = `List Datacenter Regions`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/regions`
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
    "serves_inference",
    "serves_batch"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}