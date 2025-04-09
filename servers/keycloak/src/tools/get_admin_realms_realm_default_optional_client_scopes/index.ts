export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_default_optional_client_scopes`
export const toolDescription = `Get realm optional client scopes.  Only name and ids are returned.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/default-optional-client-scopes`
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