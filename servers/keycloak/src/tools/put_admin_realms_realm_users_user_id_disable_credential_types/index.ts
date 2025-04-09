export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_users_user_id_disable_credential_types`
export const toolDescription = `Disable all credentials for a user of a specific type`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}/disable-credential-types`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}