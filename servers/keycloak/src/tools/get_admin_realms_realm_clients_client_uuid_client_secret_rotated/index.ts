export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_clients_client_uuid_client_secret_rotated`
export const toolDescription = `Get the rotated client secret`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/client-secret/rotated`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}