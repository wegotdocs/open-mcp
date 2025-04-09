export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_users_profile_metadata`
export const toolDescription = `Get the UserProfileMetadata from the configuration`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/profile/metadata`
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