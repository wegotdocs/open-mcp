import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_groups_group_id_role_mappings_clients_cl",
  "toolDescription": "Add client-level roles to the user or group role mapping",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/groups/{group-id}/role-mappings/clients/{client-id}",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool