export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_users_user_id_federated_identity_provide`
export const toolDescription = `Add a social login provider to the user`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}/federated-identity/{provider}`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "provider"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}