export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_users_user_id_credentials_credentialid_m`
export const toolDescription = `Move a credential to a first position in the credentials list of the user`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}/credentials/{credentialId}/moveToFirst`
export const method = `post`
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