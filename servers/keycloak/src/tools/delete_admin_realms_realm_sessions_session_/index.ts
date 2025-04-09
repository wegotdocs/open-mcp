export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_sessions_session_`
export const toolDescription = `Remove a specific user session.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/sessions/{session}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "isOffline"
  ],
  "header": [],
  "path": [
    "session"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}