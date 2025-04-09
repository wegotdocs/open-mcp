export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_users_profile`
export const toolDescription = `Set the configuration for the user profile`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/profile`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "attributes",
    "groups",
    "unmanagedAttributePolicy"
  ]
}
export const flatMap = {}