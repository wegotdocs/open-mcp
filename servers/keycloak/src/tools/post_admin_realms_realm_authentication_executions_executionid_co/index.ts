export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_authentication_executions_executionid_co`
export const toolDescription = `Update execution with new configuration`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/executions/{executionId}/config`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "executionId"
  ],
  "cookie": [],
  "body": [
    "id",
    "alias",
    "config"
  ]
}
export const flatMap = {}