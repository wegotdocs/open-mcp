export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms`
export const toolDescription = `Get accessible realms Returns a list of accessible realms. The list is filtered based on what realms the caller is allowed to view.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "briefRepresentation"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}