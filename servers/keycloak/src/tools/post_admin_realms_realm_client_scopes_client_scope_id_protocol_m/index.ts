export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_client_scopes_client_scope_id_protocol_m`
export const toolDescription = `Create a mapper`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-scopes/{client-scope-id}/protocol-mappers/models`
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