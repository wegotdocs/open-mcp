import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_authentication_executions_executionid_",
  "toolDescription": "Get Single Execution",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/executions/{executionId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "executionId": "executionId"
    }
  },
  inputParamsSchema
}

export default tool