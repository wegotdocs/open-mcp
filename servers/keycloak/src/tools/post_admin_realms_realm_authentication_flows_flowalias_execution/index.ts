import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_authentication_flows_flowalias_execution",
  "toolDescription": "Add new flow with new execution to existing flow",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/flows/{flowAlias}/executions/flow",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "flowAlias": "flowAlias"
    }
  },
  inputParamsSchema
}

export default tool