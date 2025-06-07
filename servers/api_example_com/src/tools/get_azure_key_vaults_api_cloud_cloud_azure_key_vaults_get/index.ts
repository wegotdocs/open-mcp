import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_azure_key_vaults_api_cloud_cloud_azure_key_vaults_get",
  "toolDescription": "Get Azure Key Vaults",
  "baseUrl": "https://api.example.com",
  "path": "/api/cloud/cloud/azure/key-vaults",
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