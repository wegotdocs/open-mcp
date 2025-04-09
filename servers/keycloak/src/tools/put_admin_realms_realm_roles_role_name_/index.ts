export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_roles_role_name_`
export const toolDescription = `Update a role by name`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/roles/{role-name}`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "role-name"
  ],
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