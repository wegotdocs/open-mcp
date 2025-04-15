import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_authentication_executions_executionid_con",
  "toolDescription": "Get execution's configuration",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/executions/{executionId}/config/{id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "executionId": "executionId",
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool