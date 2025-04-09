export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_organizations_org_id_members_invite_user`
export const toolDescription = `Invites an existing user or sends a registration link to a new user, based on the provided e-mail address.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/organizations/{org-id}/members/invite-user`
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