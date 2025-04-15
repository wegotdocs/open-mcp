export { inputParams } from "./schema/root.js"

export const toolName = `revert_deployment_revision`
export const toolDescription = `Revert Deployment Revision`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/configs/deployment/{deployment_revision_id}/revert`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
    "in": "header",
    "envVarName": "AUTHORIZATION",
    "schemeType": "apiKey",
    "schemeName": "Authorization"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "deployment_revision_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}