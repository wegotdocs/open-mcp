export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_roles_by_id_role_id_composites`
export const toolDescription = `Make the role a composite role by associating some child roles`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/roles-by-id/{role-id}/composites`
export const method = `post`
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