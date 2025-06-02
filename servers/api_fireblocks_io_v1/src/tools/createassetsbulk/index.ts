import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createassetsbulk",
  "toolDescription": "Bulk creation of wallets",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/vault/assets/bulk",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "assetId": "assetId",
      "vaultAccountIdFrom": "vaultAccountIdFrom",
      "vaultAccountIdTo": "vaultAccountIdTo"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool