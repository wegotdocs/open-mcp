export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_client_templates`
export const toolDescription = `Get client scopes belonging to the realm Returns a list of client scopes belonging to the realm`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-templates`
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