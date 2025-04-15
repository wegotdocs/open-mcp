import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_clients_client_uuid_client_secret",
  "toolDescription": "Generate a new secret for the client",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/client-secret",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool