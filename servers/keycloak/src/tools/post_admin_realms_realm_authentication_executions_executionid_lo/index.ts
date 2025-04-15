import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_authentication_executions_executionid_lo",
  "toolDescription": "Lower execution's priority",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/executions/{executionId}/lower-priority",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "executionId": "executionId"
    }
  },
  inputParamsSchema
}

export default tool