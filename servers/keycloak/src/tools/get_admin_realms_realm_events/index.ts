export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_events`
export const toolDescription = `Get events Returns all events, or filters them based on URL query parameters listed here`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/events`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "client",
    "dateFrom",
    "dateTo",
    "first",
    "ipAddress",
    "max",
    "type",
    "user"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}