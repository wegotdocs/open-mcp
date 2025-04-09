export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_push_revocation`
export const toolDescription = `Push the realm's revocation policy to any client that has an admin url associated with it.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/push-revocation`
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