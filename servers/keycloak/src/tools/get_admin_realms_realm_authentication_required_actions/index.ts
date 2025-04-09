export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_authentication_required_actions`
export const toolDescription = `Get required actions Returns a stream of required actions.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/required-actions`
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