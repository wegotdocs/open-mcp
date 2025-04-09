export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_users_count`
export const toolDescription = `Returns the number of users that match the given criteria.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/count`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "email",
    "emailVerified",
    "enabled",
    "firstName",
    "lastName",
    "q",
    "search",
    "username"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}