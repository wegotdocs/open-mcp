export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_client_types`
export const toolDescription = `List all client types available in the current realm`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-types`
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