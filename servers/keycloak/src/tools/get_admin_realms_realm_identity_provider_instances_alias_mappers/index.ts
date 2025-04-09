export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_identity_provider_instances_alias_mappers`
export const toolDescription = `Get mapper by id for the identity provider`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/identity-provider/instances/{alias}/mappers/{id}`
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