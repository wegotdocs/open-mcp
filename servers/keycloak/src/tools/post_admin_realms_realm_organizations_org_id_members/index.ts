import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_organizations_org_id_members",
  "toolDescription": "Adds the user with the specified id as a member of the organization",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/organizations/{org-id}/members",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool