import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_client_templates",
  "toolDescription": "Create a new client scope Client Scope’s name must be unique!",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/client-templates",
  "method": "post",
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