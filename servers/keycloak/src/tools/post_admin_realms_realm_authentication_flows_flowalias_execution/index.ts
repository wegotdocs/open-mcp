export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_authentication_flows_flowalias_execution`
export const toolDescription = `Add new flow with new execution to existing flow`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/flows/{flowAlias}/executions/flow`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "flowAlias"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}