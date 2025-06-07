import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_cost_data_api_cloud_cloud_provider_costs_get",
  "toolDescription": "Get Cost Data",
  "baseUrl": "https://api.example.com",
  "path": "/api/cloud/cloud/{provider}/costs",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "provider": "provider"
    },
    "query": {
      "days": "days",
      "region": "region",
      "subscription_id": "subscription_id",
      "resource_group": "resource_group"
    }
  },
  inputParamsSchema
}

export default tool