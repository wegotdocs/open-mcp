export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_components`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/components`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "name",
    "parent",
    "type"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}