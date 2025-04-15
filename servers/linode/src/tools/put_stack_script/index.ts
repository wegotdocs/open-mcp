export { inputParams } from "./schema/root.js"

export const toolName = `put_stack_script`
export const toolDescription = `Update a StackScript`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/linode/stackscripts/{stackscriptId}`
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
    "created",
    "deployments_active",
    "deployments_total",
    "description",
    "id",
    "images",
    "is_public",
    "label",
    "mine",
    "rev_note",
    "script",
    "updated",
    "user_defined_fields",
    "user_gravatar_id",
    "username"
  ]
}
export const flatMap = {}