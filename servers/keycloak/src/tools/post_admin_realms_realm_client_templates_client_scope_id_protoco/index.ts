export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_client_templates_client_scope_id_protoco`
export const toolDescription = `Create a mapper`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/models`
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