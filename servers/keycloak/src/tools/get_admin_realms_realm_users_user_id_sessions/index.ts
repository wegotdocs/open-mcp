export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_users_user_id_sessions`
export const toolDescription = `Get sessions associated with the user`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}/sessions`
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