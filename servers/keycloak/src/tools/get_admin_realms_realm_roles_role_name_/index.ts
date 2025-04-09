export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_roles_role_name_`
export const toolDescription = `Get a role by name`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/roles/{role-name}`
export const method = `get`
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