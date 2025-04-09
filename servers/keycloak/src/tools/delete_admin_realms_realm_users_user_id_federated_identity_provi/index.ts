export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_users_user_id_federated_identity_provi`
export const toolDescription = `Remove a social login provider from user`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}/federated-identity/{provider}`
export const method = `delete`
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