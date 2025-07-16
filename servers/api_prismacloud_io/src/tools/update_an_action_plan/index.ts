import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_an_action_plan",
  "toolDescription": "Update Action Plan Status or Assignee",
  "baseUrl": "https://api.prismacloud.io",
  "path": "/apm/api/v1/action-plan/{action-plan-id}/status-assignee",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "action-plan-id": "action-plan-id"
    },
    "header": {
      "x-redlock-auth": "x-redlock-auth"
    }
  },
  inputParamsSchema
}

export default tool