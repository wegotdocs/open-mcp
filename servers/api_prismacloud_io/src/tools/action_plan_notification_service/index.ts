import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "action_plan_notification_service",
  "toolDescription": "Send Notification",
  "baseUrl": "https://api.prismacloud.io",
  "path": "/apm/api/v1/action-plan/{action-plan-id}/notification/ondemand",
  "method": "post",
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