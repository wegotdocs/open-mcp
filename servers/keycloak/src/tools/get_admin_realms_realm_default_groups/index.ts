export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_default_groups`
export const toolDescription = `Get group hierarchy.  Only name and ids are returned.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/default-groups`
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