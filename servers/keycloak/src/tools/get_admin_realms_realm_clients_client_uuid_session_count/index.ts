import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_clients_client_uuid_session_count",
  "toolDescription": "Get application session count Returns a number of user sessions associated with this client { \"count\": number }",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/session-count",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool