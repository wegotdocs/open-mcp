export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_identity_provider_instances_alias_mappers`
export const toolDescription = `Update a mapper for the identity provider`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/identity-provider/instances/{alias}/mappers/{id}`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": [
    "b_id",
    "name",
    "identityProviderAlias",
    "identityProviderMapper",
    "config"
  ]
}
export const flatMap = {
  "b_id": "id"
}