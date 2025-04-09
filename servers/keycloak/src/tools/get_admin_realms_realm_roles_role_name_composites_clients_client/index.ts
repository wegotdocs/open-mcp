export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_roles_role_name_composites_clients_client`
export const toolDescription = `Get client-level roles for the client that are in the role's composite`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/roles/{role-name}/composites/clients/{client-uuid}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "client-uuid",
    "role-name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}