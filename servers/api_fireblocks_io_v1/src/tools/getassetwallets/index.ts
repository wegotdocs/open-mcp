import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getassetwallets",
  "toolDescription": "List asset wallets (Paginated)",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/vault/asset_wallets",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "totalAmountLargerThan": "totalAmountLargerThan",
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