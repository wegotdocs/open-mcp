export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_roles_by_id_role_id_`
export const toolDescription = `Delete the role`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/roles-by-id/{role-id}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "role-id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}