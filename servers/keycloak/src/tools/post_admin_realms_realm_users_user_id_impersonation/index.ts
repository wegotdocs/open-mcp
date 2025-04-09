export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_users_user_id_impersonation`
export const toolDescription = `Impersonate the user`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}/impersonation`
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