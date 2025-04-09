export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_attack_detection_brute_force_users`
export const toolDescription = `Clear any user login failures for all users This can release temporary disabled users`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/attack-detection/brute-force/users`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}