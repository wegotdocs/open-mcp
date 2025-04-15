import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_organizations_org_id_members",
  "toolDescription": "Returns a paginated list of organization members filtered according to the specified parameters",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/organizations/{org-id}/members",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "exact": "exact",
      "first": "first",
      "max": "max",
      "membershipType": "membershipType",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool