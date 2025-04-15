import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_authentication_executions_executionid_co",
  "toolDescription": "Update execution with new configuration",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/executions/{executionId}/config",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "executionId": "executionId"
    },
    "body": {
      "id": "id",
      "alias": "alias",
      "config": "config"
    }
  },
  inputParamsSchema
}

export default tool