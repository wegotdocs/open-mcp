import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_organizations_org_id_members_member_id_",
  "toolDescription": "Returns the member of the organization with the specified id",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/organizations/{org-id}/members/{member-id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "member-id": "member-id"
    }
  },
  inputParamsSchema
}

export default tool