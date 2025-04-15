import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_clients_client_uuid_evaluate_scopes_scope",
  "toolDescription": "Get roles, which this client doesn't have scope for and can't have them in the accessToken issued for him.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/evaluate-scopes/scope-mappings/{roleContainerId}/not-granted",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool