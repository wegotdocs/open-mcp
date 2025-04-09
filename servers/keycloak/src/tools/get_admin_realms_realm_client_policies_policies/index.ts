export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_client_policies_policies`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-policies/policies`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "include-global-policies"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}