export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_clients_client_uuid_client_secret`
export const toolDescription = `Generate a new secret for the client`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/client-secret`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}