export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_users_user_id_credentials_credentialid_us`
export const toolDescription = `Update a credential label for a user`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}/credentials/{credentialId}/userLabel`
export const method = `put`
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