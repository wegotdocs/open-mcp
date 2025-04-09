export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_logout_all`
export const toolDescription = `Removes all user sessions.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/logout-all`
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