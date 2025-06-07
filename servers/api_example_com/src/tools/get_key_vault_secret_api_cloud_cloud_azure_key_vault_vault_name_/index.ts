import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_key_vault_secret_api_cloud_cloud_azure_key_vault_vault_name_",
  "toolDescription": "Get Key Vault Secret",
  "baseUrl": "https://api.example.com",
  "path": "/api/cloud/cloud/azure/key-vault/{vault_name}/{secret_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "vault_name": "vault_name",
      "secret_name": "secret_name"
    },
    "query": {
      "subscription_id": "subscription_id",
      "resource_group": "resource_group"
    }
  },
  inputParamsSchema
}

export default tool