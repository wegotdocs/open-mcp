import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_azure_costs_api_cloud_azure_costs_get",
  "toolDescription": "Get Azure Costs",
  "baseUrl": "https://api.example.com",
  "path": "/api/cloud/azure/costs",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "subscription_id": "subscription_id",
      "timeframe": "timeframe",
      "granularity": "granularity"
    }
  },
  inputParamsSchema
}

export default tool