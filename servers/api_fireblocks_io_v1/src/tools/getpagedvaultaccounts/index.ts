import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpagedvaultaccounts",
  "toolDescription": "Get vault accounts (Paginated)",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/vault/accounts_paged",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "namePrefix": "namePrefix",
      "nameSuffix": "nameSuffix",
      "minAmountThreshold": "minAmountThreshold",
      "assetId": "assetId",
      "orderBy": "orderBy",
      "before": "before",
      "after": "after",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool