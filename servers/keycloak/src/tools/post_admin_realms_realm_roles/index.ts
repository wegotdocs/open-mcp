export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_roles`
export const toolDescription = `Create a new role for the realm or client`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/roles`
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
    "description",
    "composite",
    "composites",
    "clientRole",
    "containerId",
    "attributes"
  ]
}
export const flatMap = {}