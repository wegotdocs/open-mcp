export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_identity_provider_instances_alias_mapp`
export const toolDescription = `Delete a mapper for the identity provider`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/identity-provider/instances/{alias}/mappers/{id}`
export const method = `delete`
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