export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_users_user_id_role_mappings_realm`
export const toolDescription = `Delete realm-level role mappings`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}/role-mappings/realm`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}