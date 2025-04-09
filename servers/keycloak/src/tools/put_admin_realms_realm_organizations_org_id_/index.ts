export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_organizations_org_id_`
export const toolDescription = `Updates the organization`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/organizations/{org-id}`
export const method = `put`
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