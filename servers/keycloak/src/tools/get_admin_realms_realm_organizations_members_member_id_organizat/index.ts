export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_organizations_members_member_id_organizat`
export const toolDescription = `Returns the organizations associated with the user that has the specified id`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/organizations/members/{member-id}/organizations`
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