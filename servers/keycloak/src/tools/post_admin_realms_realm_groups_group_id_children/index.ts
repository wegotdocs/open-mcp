export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_groups_group_id_children`
export const toolDescription = `Set or create child.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/groups/{group-id}/children`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "id",
    "name",
    "path",
    "parentId",
    "subGroupCount",
    "subGroups",
    "attributes",
    "realmRoles",
    "clientRoles",
    "access"
  ]
}
export const flatMap = {}