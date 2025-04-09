export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_clients_client_uuid_evaluate_scopes_gener`
export const toolDescription = `Create JSON with payload of example user info`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/evaluate-scopes/generate-example-userinfo`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "scope",
    "userId"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}