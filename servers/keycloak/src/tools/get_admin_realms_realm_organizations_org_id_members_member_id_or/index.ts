import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_organizations_org_id_members_member_id_or",
  "toolDescription": "Returns the organizations associated with the user that has the specified id",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/organizations/{org-id}/members/{member-id}/organizations",
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