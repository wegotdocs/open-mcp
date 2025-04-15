import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_client_templates_client_scope_id_",
  "toolDescription": "Update the client scope",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/client-templates/{client-scope-id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "name": "name",
      "description": "description",
      "protocol": "protocol",
      "attributes": "attributes",
      "protocolMappers": "protocolMappers"
    }
  },
  inputParamsSchema
}

export default tool