export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_groups_group_id_children`
export const toolDescription = `Return a paginated list of subgroups that have a parent group corresponding to the group on the URL`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/groups/{group-id}/children`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "briefRepresentation",
    "exact",
    "first",
    "max",
    "search"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}