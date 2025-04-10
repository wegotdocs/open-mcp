export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_authentication_authenticator_providers`
export const toolDescription = `Get authenticator providers Returns a stream of authenticator providers.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/authenticator-providers`
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