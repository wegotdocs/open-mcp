export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_organizations_org_id_identity_providers`
export const toolDescription = `Returns all identity providers associated with the organization`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/organizations/{org-id}/identity-providers`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}