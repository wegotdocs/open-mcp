export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_clients_client_uuid_authz_resource_ser`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/scope/{scope-id}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "scope-id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}