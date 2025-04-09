export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_client_scopes_client_scope_id_scope_ma`
export const toolDescription = `Remove a set of realm-level roles from the client's scope`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/realm`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}