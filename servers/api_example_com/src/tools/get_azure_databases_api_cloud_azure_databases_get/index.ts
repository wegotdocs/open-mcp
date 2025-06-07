import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_azure_databases_api_cloud_azure_databases_get",
  "toolDescription": "Get Azure Databases",
  "baseUrl": "https://api.example.com",
  "path": "/api/cloud/azure/databases",
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