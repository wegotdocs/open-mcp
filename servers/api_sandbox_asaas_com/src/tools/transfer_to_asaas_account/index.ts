import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "transfer_to_asaas_account",
  "toolDescription": "Transfer to Asaas account",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/transfers/",
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
    "body": {
      "value": "value",
      "walletId": "walletId",
      "externalReference": "externalReference"
    }
  },
  inputParamsSchema
}

export default tool