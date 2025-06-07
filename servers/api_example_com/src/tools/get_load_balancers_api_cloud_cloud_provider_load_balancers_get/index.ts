import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_load_balancers_api_cloud_cloud_provider_load_balancers_get",
  "toolDescription": "Get Load Balancers",
  "baseUrl": "https://api.example.com",
  "path": "/api/cloud/cloud/{provider}/load-balancers",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "provider": "provider"
    },
    "query": {
      "region": "region",
      "subscription_id": "subscription_id",
      "resource_group": "resource_group"
    }
  },
  inputParamsSchema
}

export default tool