import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_clients_client_uuid_client_secret",
  "toolDescription": "Get the client secret",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/client-secret",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool