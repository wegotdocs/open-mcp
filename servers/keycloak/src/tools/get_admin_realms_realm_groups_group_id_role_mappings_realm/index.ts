export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_groups_group_id_role_mappings_realm`
export const toolDescription = `Get realm-level role mappings`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/groups/{group-id}/role-mappings/realm`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}