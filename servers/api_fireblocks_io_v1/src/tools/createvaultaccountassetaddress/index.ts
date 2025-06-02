import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createvaultaccountassetaddress",
  "toolDescription": "Create new asset deposit address",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/vault/accounts/{vaultAccountId}/{assetId}/addresses",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "vaultAccountId": "vaultAccountId",
      "assetId": "assetId"
    },
    "body": {
      "description": "description",
      "customerRefId": "customerRefId"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool