import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createmultipledepositaddresses",
  "toolDescription": "Bulk creation of new deposit addresses",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/vault/accounts/addresses/bulk",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "vaultAccountId": "vaultAccountId",
      "assetId": "assetId",
      "count": "count",
      "descriptions": "descriptions",
      "vaultAccountToCopyDescFrom": "vaultAccountToCopyDescFrom",
      "vaultAccountToCopyDescFromIndex": "vaultAccountToCopyDescFromIndex"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool