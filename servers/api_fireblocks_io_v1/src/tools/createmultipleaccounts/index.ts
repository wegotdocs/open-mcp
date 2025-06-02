import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createmultipleaccounts",
  "toolDescription": "Bulk creation of new vault accounts",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/vault/accounts/bulk",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "count": "count",
      "assetIds": "assetIds"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool