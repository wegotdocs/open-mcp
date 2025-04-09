export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_organizations`
export const toolDescription = `Creates a new organization`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/organizations`
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
    "alias",
    "enabled",
    "description",
    "redirectUrl",
    "attributes",
    "domains",
    "members",
    "identityProviders"
  ]
}
export const flatMap = {}