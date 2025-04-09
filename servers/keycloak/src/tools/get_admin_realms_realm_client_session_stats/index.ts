export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_client_session_stats`
export const toolDescription = `Get client session stats Returns a JSON map.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-session-stats`
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