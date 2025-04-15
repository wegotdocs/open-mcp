import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_client_templates_client_scope_id_protoco",
  "toolDescription": "Create a mapper",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/models",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "name": "name",
      "protocol": "protocol",
      "protocolMapper": "protocolMapper",
      "config": "config"
    }
  },
  inputParamsSchema
}

export default tool