import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_clients_client_uuid_installation_provider",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/installation/providers/{providerId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "providerId": "providerId"
    }
  },
  inputParamsSchema
}

export default tool