export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_partial_export`
export const toolDescription = `Partial export of existing realm into a JSON file.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/partial-export`
export const method = `post`
export const security = []
export const keys = {
  "query": [
    "exportClients",
    "exportGroupsAndRoles"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}