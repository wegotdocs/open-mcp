export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_roles_role_name_composites`
export const toolDescription = `Remove roles from the role's composite`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/roles/{role-name}/composites`
export const method = `delete`
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