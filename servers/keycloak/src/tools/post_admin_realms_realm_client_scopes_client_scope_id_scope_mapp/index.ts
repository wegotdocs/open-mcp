export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_client_scopes_client_scope_id_scope_mapp`
export const toolDescription = `Add a set of realm-level roles to the client's scope`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/realm`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}