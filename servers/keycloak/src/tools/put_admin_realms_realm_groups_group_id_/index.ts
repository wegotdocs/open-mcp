export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_groups_group_id_`
export const toolDescription = `Update group, ignores subgroups.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/groups/{group-id}`
export const method = `put`
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