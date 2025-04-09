export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_organizations_org_id_members_member_id_`
export const toolDescription = `Returns the member of the organization with the specified id`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/organizations/{org-id}/members/{member-id}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "member-id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}