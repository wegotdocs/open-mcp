export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_clients_client_uuid_push_revocation`
export const toolDescription = `Push the client's revocation policy to its admin URL If the client has an admin URL, push revocation policy to it.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/push-revocation`
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