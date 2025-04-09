export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_roles_role_name_composites_realm`
export const toolDescription = `Get realm-level roles of the role's composite`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/roles/{role-name}/composites/realm`
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