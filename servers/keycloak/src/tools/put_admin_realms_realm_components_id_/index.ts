export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_components_id_`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/components/{id}`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": [
    "b_id",
    "name",
    "providerId",
    "providerType",
    "parentId",
    "subType",
    "config"
  ]
}
export const flatMap = {
  "b_id": "id"
}