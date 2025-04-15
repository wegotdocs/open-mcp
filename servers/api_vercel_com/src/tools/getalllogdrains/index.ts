export { inputParams } from "./schema/root.js"

export const toolName = `getalllogdrains`
export const toolDescription = `Retrieves a list of all the Log Drains`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/log-drains`
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
    "projectId",
    "projectIdOrName",
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}