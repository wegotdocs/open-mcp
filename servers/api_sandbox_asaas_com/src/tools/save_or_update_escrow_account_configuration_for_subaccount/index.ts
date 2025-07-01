import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "save_or_update_escrow_account_configuration_for_subaccount",
  "toolDescription": "Save or update Escrow Account configuration for subaccount",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/accounts/{id}/escrow",
  "method": "post",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "daysToExpire": "daysToExpire",
      "enabled": "enabled",
      "isFeePayer": "isFeePayer"
    }
  },
  inputParamsSchema
}

export default tool