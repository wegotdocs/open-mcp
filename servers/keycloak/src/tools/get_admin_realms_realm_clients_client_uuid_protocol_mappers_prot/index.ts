export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_clients_client_uuid_protocol_mappers_prot`
export const toolDescription = `Get mappers by name for a specific protocol`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/protocol-mappers/protocol/{protocol}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "protocol"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}