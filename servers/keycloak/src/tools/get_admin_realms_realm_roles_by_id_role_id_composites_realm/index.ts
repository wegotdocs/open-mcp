export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_roles_by_id_role_id_composites_realm`
export const toolDescription = `Get realm-level roles that are in the role's composite`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/roles-by-id/{role-id}/composites/realm`
export const method = `get`
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