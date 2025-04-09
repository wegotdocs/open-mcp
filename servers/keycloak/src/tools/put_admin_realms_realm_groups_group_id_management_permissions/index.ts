export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_groups_group_id_management_permissions`
export const toolDescription = `Return object stating whether client Authorization permissions have been initialized or not and a reference`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/groups/{group-id}/management/permissions`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "enabled",
    "resource",
    "scopePermissions"
  ]
}
export const flatMap = {}