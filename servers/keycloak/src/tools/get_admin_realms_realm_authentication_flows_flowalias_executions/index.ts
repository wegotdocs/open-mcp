import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_authentication_flows_flowalias_executions",
  "toolDescription": "Get authentication executions for a flow",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/flows/{flowAlias}/executions",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "flowAlias": "flowAlias"
    }
  },
  inputParamsSchema
}

export default tool