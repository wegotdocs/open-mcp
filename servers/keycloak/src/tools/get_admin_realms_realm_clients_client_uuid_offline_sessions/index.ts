export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_clients_client_uuid_offline_sessions`
export const toolDescription = `Get offline sessions for client Returns a list of offline user sessions associated with this client`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/offline-sessions`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "first",
    "max"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}