export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_clients_client_uuid_roles`
export const toolDescription = `Get all roles for the realm or client`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/roles`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "briefRepresentation",
    "first",
    "max",
    "search"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}