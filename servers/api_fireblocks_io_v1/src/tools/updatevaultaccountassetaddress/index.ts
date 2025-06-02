import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatevaultaccountassetaddress",
  "toolDescription": "Update address description",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/vault/accounts/{vaultAccountId}/{assetId}/addresses/{addressId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "vaultAccountId": "vaultAccountId",
      "assetId": "assetId",
      "addressId": "addressId"
    },
    "body": {
      "description": "description"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool