export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_users_user_id_credentials_credentialid`
export const toolDescription = `Remove a credential for a user`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}/credentials/{credentialId}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "credentialId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}