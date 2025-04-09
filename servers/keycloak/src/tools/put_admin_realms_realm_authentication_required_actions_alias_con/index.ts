export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_authentication_required_actions_alias_con`
export const toolDescription = `Update RequiredAction configuration`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/required-actions/{alias}/config`
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
    "config"
  ]
}
export const flatMap = {}