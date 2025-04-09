export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_client_policies_policies`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-policies/policies`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "policies",
    "globalPolicies"
  ]
}
export const flatMap = {}