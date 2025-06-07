import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_azure_app_services_api_cloud_azure_app_services_get",
  "toolDescription": "Get Azure App Services",
  "baseUrl": "https://api.example.com",
  "path": "/api/cloud/azure/app-services",
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