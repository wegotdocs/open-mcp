import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_realms_realm_organizations_org_id_",
  "toolDescription": "Deletes the organization",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/organizations/{org-id}",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool