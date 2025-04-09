export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_components`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/components`
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
    "providerId",
    "providerType",
    "parentId",
    "subType",
    "config"
  ]
}
export const flatMap = {}