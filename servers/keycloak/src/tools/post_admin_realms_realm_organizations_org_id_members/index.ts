export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_organizations_org_id_members`
export const toolDescription = `Adds the user with the specified id as a member of the organization`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/organizations/{org-id}/members`
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