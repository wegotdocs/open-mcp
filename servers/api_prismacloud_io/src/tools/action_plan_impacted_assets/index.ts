import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "action_plan_impacted_assets",
  "toolDescription": "List Impacted Assets",
  "baseUrl": "https://api.prismacloud.io",
  "path": "/apm/api/v1/action-plan/{action-plan-id}/impacted-assets",
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