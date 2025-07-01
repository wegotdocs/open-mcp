import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "transfer_to_another_institution_account_or_pix_key",
  "toolDescription": "Transfer to another Institution’s account or Pix key",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/transfers",
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
      "bankAccount": "bankAccount",
      "operationType": "operationType",
      "pixAddressKey": "pixAddressKey",
      "pixAddressKeyType": "pixAddressKeyType",
      "description": "description",
      "scheduleDate": "scheduleDate",
      "externalReference": "externalReference",
      "recurring": "recurring"
    }
  },
  inputParamsSchema
}

export default tool