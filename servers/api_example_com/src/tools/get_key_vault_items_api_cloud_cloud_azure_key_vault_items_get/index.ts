import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_key_vault_items_api_cloud_cloud_azure_key_vault_items_get",
  "toolDescription": "Get Key Vault Items",
  "baseUrl": "https://api.example.com",
  "path": "/api/cloud/cloud/azure/key-vault/items",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "vault_name": "vault_name",
      "subscription_id": "subscription_id",
      "resource_group": "resource_group"
    }
  },
  inputParamsSchema
}

export default tool