export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_clients`
export const toolDescription = `Get clients belonging to the realm.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "clientId",
    "first",
    "max",
    "q",
    "search",
    "viewableOnly"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}