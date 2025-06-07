import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_storage_volumes_api_cloud_cloud_provider_storage_get",
  "toolDescription": "Get Storage Volumes",
  "baseUrl": "https://api.example.com",
  "path": "/api/cloud/cloud/{provider}/storage",
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