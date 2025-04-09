export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_default_groups_groupid_`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/default-groups/{groupId}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "groupId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}