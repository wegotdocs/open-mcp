export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_clients_client_uuid_client_secret_rota`
export const toolDescription = `Invalidate the rotated secret for the client`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/client-secret/rotated`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}