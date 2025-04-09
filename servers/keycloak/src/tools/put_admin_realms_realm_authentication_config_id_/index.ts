export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_authentication_config_id_`
export const toolDescription = `Update authenticator configuration`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/config/{id}`
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
    "alias",
    "config"
  ]
}
export const flatMap = {
  "b_id": "id"
}