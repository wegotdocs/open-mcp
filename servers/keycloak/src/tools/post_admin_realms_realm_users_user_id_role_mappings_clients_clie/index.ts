export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_users_user_id_role_mappings_clients_clie`
export const toolDescription = `Add client-level roles to the user or group role mapping`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}/role-mappings/clients/{client-id}`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}