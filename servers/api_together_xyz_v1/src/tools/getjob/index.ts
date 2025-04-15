export { inputParams } from "./schema/root.js"

export const toolName = `getjob`
export const toolDescription = `Get job status`
export const baseUrl = `https://api.together.xyz/v1`
export const path = `/jobs/{jobId}`
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
  "path": [
    "jobId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}