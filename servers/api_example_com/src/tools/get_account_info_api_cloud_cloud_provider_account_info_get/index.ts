import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_account_info_api_cloud_cloud_provider_account_info_get",
  "toolDescription": "Get Account Info",
  "baseUrl": "https://api.example.com",
  "path": "/api/cloud/cloud/{provider}/account-info",
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