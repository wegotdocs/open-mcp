export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_users_user_id_role_mappings_realm_composi`
export const toolDescription = `Get effective realm-level role mappings This will recurse all composite roles to get the result.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}/role-mappings/realm/composite`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "briefRepresentation"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}