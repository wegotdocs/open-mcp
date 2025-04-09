export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_client_scopes_client_scope_id_protocol`
export const toolDescription = `Delete the mapper`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-scopes/{client-scope-id}/protocol-mappers/models/{id}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}