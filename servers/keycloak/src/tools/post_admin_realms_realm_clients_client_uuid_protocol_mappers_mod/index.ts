export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_clients_client_uuid_protocol_mappers_mod`
export const toolDescription = `Create a mapper`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/protocol-mappers/models`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "id",
    "name",
    "protocol",
    "protocolMapper",
    "config"
  ]
}
export const flatMap = {}