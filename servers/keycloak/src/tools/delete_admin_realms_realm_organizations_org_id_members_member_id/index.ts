import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_realms_realm_organizations_org_id_members_member_id",
  "toolDescription": "Removes the user with the specified id from the organization",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/organizations/{org-id}/members/{member-id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "member-id": "member-id"
    }
  },
  inputParamsSchema
}

export default tool