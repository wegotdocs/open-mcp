export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_client_templates_client_scope_id_protocol`
export const toolDescription = `Update the mapper`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/models/{id}`
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