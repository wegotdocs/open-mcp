export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_authentication_required_actions_alias_`
export const toolDescription = `Delete RequiredAction configuration`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/required-actions/{alias}/config`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "alias"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}