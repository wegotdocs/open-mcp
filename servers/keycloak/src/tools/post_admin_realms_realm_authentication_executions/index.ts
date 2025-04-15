import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_authentication_executions",
  "toolDescription": "Add new authentication execution",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/executions",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "authenticatorConfig": "authenticatorConfig",
      "authenticator": "authenticator",
      "authenticatorFlow": "authenticatorFlow",
      "requirement": "requirement",
      "priority": "priority",
      "id": "id",
      "flowId": "flowId",
      "parentFlow": "parentFlow"
    }
  },
  inputParamsSchema
}

export default tool