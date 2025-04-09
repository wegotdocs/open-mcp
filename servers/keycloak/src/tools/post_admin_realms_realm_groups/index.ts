export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_groups`
export const toolDescription = `create or add a top level realm groupSet or create child.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/groups`
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