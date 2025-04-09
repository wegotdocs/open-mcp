export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_users_user_id_configured_user_storage_cre`
export const toolDescription = `Return credential types, which are provided by the user storage where user is stored.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}/configured-user-storage-credential-types`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}