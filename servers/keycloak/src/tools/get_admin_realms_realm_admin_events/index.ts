export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_admin_events`
export const toolDescription = `Get admin events Returns all admin events, or filters events based on URL query parameters listed here`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/admin-events`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "authClient",
    "authIpAddress",
    "authRealm",
    "authUser",
    "dateFrom",
    "dateTo",
    "first",
    "max",
    "operationTypes",
    "resourcePath",
    "resourceTypes"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}