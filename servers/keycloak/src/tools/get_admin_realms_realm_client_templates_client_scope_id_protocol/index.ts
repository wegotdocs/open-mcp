export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_client_templates_client_scope_id_protocol`
export const toolDescription = `Get mappers by name for a specific protocol`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/protocol/{protocol}`
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