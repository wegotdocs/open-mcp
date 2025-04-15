import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_clients_client_uuid_service_account_user",
  "toolDescription": "Get a user dedicated to the service account",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/service-account-user",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool