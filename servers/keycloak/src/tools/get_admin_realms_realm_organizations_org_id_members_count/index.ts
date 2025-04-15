import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_organizations_org_id_members_count",
  "toolDescription": "Returns number of members in the organization.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/organizations/{org-id}/members/count",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool