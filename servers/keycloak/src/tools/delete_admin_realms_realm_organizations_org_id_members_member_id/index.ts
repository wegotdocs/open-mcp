export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_organizations_org_id_members_member_id`
export const toolDescription = `Removes the user with the specified id from the organization`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/organizations/{org-id}/members/{member-id}`
export const method = `delete`
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