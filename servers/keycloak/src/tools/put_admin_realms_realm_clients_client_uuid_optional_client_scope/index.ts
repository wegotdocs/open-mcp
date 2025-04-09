export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_clients_client_uuid_optional_client_scope`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/optional-client-scopes/{clientScopeId}`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "clientScopeId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}