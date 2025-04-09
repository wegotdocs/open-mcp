export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_organizations`
export const toolDescription = `Returns a paginated list of organizations filtered according to the specified parameters`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/organizations`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "briefRepresentation",
    "exact",
    "first",
    "max",
    "q",
    "search"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}