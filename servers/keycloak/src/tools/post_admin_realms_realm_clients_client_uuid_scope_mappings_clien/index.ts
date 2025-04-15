import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_clients_client_uuid_scope_mappings_clien",
  "toolDescription": "Add client-level roles to the client's scope",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/scope-mappings/clients/{client}",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool