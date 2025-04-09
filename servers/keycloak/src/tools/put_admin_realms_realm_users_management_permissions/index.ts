export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_users_management_permissions`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users-management-permissions`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "enabled",
    "resource",
    "scopePermissions"
  ]
}
export const flatMap = {}