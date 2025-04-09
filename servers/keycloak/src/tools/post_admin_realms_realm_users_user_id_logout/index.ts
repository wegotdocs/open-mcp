export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_users_user_id_logout`
export const toolDescription = `Remove all user sessions associated with the user Also send notification to all clients that have an admin URL to invalidate the sessions for the particular user.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}/logout`
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