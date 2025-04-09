export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_client_templates`
export const toolDescription = `Create a new client scope Client Scope’s name must be unique!`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-templates`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "id",
    "name",
    "description",
    "protocol",
    "attributes",
    "protocolMappers"
  ]
}
export const flatMap = {}