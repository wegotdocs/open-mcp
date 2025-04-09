export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_groups_count`
export const toolDescription = `Returns the groups counts.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/groups/count`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "search",
    "top"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}