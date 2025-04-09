export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_users_user_id_reset_password`
export const toolDescription = `Set up a new password for the user.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}/reset-password`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "id",
    "type",
    "userLabel",
    "createdDate",
    "secretData",
    "credentialData",
    "priority",
    "value",
    "temporary"
  ]
}
export const flatMap = {}