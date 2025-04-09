export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_organizations_org_id_members_invite_exis`
export const toolDescription = `Invites an existing user to the organization, using the specified user id`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/organizations/{org-id}/members/invite-existing-user`
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