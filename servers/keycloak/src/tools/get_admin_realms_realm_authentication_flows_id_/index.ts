export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_authentication_flows_id_`
export const toolDescription = `Get authentication flow for id`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/flows/{id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}