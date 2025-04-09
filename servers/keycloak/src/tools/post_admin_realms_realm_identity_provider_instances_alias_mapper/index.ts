export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_identity_provider_instances_alias_mapper`
export const toolDescription = `Add a mapper to identity provider`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/identity-provider/instances/{alias}/mappers`
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
    "identityProviderAlias",
    "identityProviderMapper",
    "config"
  ]
}
export const flatMap = {}