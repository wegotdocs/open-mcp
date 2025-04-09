export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_organizations_org_id_identity_providers`
export const toolDescription = `Adds the identity provider with the specified id to the organization`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/organizations/{org-id}/identity-providers`
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