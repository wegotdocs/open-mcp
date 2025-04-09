export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_clients_initial_access`
export const toolDescription = `Create a new initial access token.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients-initial-access`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "expiration",
    "count"
  ]
}
export const flatMap = {}