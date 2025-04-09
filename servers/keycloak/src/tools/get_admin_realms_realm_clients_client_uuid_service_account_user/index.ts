export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_clients_client_uuid_service_account_user`
export const toolDescription = `Get a user dedicated to the service account`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/service-account-user`
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