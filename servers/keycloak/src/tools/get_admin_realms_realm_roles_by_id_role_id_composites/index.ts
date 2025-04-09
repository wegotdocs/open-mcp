export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_roles_by_id_role_id_composites`
export const toolDescription = `Get role's children Returns a set of role's children provided the role is a composite.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/roles-by-id/{role-id}/composites`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "first",
    "max",
    "search"
  ],
  "header": [],
  "path": [
    "role-id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}