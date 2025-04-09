export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_clients_client_uuid_evaluate_scopes_proto`
export const toolDescription = `Return list of all protocol mappers, which will be used when generating tokens issued for particular client.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/evaluate-scopes/protocol-mappers`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "scope"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}