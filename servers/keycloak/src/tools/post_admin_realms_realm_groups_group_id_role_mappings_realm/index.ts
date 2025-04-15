import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_groups_group_id_role_mappings_realm",
  "toolDescription": "Add realm-level role mappings to the user",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/groups/{group-id}/role-mappings/realm",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool