import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "action_plan_related_alerts",
  "toolDescription": "List Related Alerts",
  "baseUrl": "https://api.prismacloud.io",
  "path": "/apm/api/v1/action-plan/{action-plan-id}/related-alerts",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "action-plan-id": "action-plan-id"
    },
    "query": {
      "limit": "limit",
      "next_page_token": "next_page_token"
    },
    "header": {
      "x-redlock-auth": "x-redlock-auth"
    }
  },
  inputParamsSchema
}

export default tool