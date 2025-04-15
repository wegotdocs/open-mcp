import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_client_templates_client_scope_id_scope_m",
  "toolDescription": "Add a set of realm-level roles to the client's scope",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/realm",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool