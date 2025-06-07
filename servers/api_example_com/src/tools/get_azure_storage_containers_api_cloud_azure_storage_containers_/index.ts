import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_azure_storage_containers_api_cloud_azure_storage_containers_",
  "toolDescription": "Get Azure Storage Containers",
  "baseUrl": "https://api.example.com",
  "path": "/api/cloud/azure/storage-containers",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "subscription_id": "subscription_id",
      "resource_group": "resource_group",
      "storage_account": "storage_account"
    }
  },
  inputParamsSchema
}

export default tool