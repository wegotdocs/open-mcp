export { inputParams } from "./schema/root.js"

export const toolName = `get_config_deployment_revision`
export const toolDescription = `Get Config Deployment Revision`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/configs/deployment/{deployment_revision_id}`
export const method = `get`
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