export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_organizations_org_id_identity_provider`
export const toolDescription = `Removes the identity provider with the specified alias from the organization`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/organizations/{org-id}/identity-providers/{alias}`
export const method = `delete`
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