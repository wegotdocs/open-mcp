export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_users_user_id_offline_sessions_clientuuid`
export const toolDescription = `Get offline sessions associated with the user and client`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/users/{user-id}/offline-sessions/{clientUuid}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "clientUuid"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}