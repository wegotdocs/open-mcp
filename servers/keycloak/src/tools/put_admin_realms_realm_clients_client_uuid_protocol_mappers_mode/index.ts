export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_clients_client_uuid_protocol_mappers_mode`
export const toolDescription = `Update the mapper`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/protocol-mappers/models/{id}`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": [
    "b_id",
    "name",
    "protocol",
    "protocolMapper",
    "config"
  ]
}
export const flatMap = {
  "b_id": "id"
}