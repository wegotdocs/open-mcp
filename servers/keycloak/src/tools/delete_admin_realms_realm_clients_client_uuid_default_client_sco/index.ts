export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_clients_client_uuid_default_client_sco`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/default-client-scopes/{clientScopeId}`
export const method = `delete`
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