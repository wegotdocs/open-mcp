export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_organizations_org_id_identity_providers_a`
export const toolDescription = `Returns the identity provider associated with the organization that has the specified alias`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/organizations/{org-id}/identity-providers/{alias}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "alias"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}