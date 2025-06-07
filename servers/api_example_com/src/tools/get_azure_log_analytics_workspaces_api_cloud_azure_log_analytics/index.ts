import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_azure_log_analytics_workspaces_api_cloud_azure_log_analytics",
  "toolDescription": "Get Azure Log Analytics Workspaces",
  "baseUrl": "https://api.example.com",
  "path": "/api/cloud/azure/log-analytics-workspaces",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "subscription_id": "subscription_id",
      "resource_group": "resource_group"
    }
  },
  inputParamsSchema
}

export default tool