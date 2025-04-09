export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_groups_group_id_members`
export const toolDescription = `Get users Returns a stream of users, filtered according to query parameters`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/groups/{group-id}/members`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "briefRepresentation",
    "first",
    "max"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}