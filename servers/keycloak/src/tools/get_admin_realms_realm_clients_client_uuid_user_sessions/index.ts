export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_clients_client_uuid_user_sessions`
export const toolDescription = `Get user sessions for client Returns a list of user sessions associated with this client`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/user-sessions`
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