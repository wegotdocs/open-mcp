export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_clients_client_uuid_scope_mappings_client`
export const toolDescription = `Get effective client roles Returns the roles for the client that are associated with the client's scope.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/scope-mappings/clients/{client}/composite`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "briefRepresentation"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}