export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_authentication_form_providers`
export const toolDescription = `Get form providers Returns a stream of form providers.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/form-providers`
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