import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_groups_group_id_role_mappings_realm",
  "toolDescription": "Get realm-level role mappings",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/groups/{group-id}/role-mappings/realm",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool