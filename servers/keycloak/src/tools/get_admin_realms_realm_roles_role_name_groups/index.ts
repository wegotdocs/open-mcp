export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_roles_role_name_groups`
export const toolDescription = `Returns a stream of groups that have the specified role name`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/roles/{role-name}/groups`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "briefRepresentation",
    "first",
    "max"
  ],
  "header": [],
  "path": [
    "role-name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}