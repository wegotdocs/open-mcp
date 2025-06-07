import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_azure_account_info_api_cloud_azure_account_info_get",
  "toolDescription": "Get Azure Account Info",
  "baseUrl": "https://api.example.com",
  "path": "/api/cloud/azure/account-info",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "subscription_id": "subscription_id"
    }
  },
  inputParamsSchema
}

export default tool