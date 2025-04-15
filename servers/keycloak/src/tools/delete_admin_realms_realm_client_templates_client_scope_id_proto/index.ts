import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_realms_realm_client_templates_client_scope_id_proto",
  "toolDescription": "Delete the mapper",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/models/{id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool