export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_clients_client_uuid_roles_role_name_comp`
export const toolDescription = `Add a composite to the role`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/composites`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "role-name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}