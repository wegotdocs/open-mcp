export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_users`
export const toolDescription = `Get users Returns a stream of users, filtered according to query parameters.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "briefRepresentation",
    "email",
    "emailVerified",
    "enabled",
    "exact",
    "first",
    "firstName",
    "idpAlias",
    "idpUserId",
    "lastName",
    "max",
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