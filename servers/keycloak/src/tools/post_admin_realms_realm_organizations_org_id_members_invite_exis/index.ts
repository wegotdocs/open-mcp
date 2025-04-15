import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_organizations_org_id_members_invite_exis",
  "toolDescription": "Invites an existing user to the organization, using the specified user id",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/organizations/{org-id}/members/invite-existing-user",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool