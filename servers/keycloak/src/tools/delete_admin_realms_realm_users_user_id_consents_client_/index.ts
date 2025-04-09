export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_users_user_id_consents_client_`
export const toolDescription = `Revoke consent and offline tokens for particular client from user`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}/consents/{client}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "client"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}