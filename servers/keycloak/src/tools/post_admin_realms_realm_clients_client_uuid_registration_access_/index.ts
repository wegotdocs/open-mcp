import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_clients_client_uuid_registration_access_",
  "toolDescription": "Generate a new registration access token for the client",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/registration-access-token",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool