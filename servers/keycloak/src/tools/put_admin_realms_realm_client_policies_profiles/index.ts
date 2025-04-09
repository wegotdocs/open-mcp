export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_client_policies_profiles`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-policies/profiles`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "profiles",
    "globalProfiles"
  ]
}
export const flatMap = {}