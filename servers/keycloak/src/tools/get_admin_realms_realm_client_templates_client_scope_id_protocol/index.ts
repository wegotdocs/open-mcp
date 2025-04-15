import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_client_templates_client_scope_id_protocol",
  "toolDescription": "Get mappers by name for a specific protocol",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/protocol/{protocol}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "protocol": "protocol"
    }
  },
  inputParamsSchema
}

export default tool