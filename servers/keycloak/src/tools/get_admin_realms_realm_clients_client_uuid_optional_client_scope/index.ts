import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_clients_client_uuid_optional_client_scope",
  "toolDescription": "Get optional client scopes.  Only name and ids are returned.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/optional-client-scopes",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool