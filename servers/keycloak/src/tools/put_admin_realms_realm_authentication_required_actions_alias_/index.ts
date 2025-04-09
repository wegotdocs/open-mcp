export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_authentication_required_actions_alias_`
export const toolDescription = `Update required action`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/required-actions/{alias}`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "alias"
  ],
  "cookie": [],
  "body": [
    "b_alias",
    "name",
    "providerId",
    "enabled",
    "defaultAction",
    "priority",
    "config"
  ]
}
export const flatMap = {
  "b_alias": "alias"
}