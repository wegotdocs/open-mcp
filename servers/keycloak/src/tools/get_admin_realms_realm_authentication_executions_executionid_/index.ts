export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_authentication_executions_executionid_`
export const toolDescription = `Get Single Execution`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/executions/{executionId}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "executionId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}