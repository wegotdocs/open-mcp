import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettransactions",
  "toolDescription": "List transaction history",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/transactions",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "before": "before",
      "after": "after",
      "status": "status",
      "orderBy": "orderBy",
      "sort": "sort",
      "limit": "limit",
      "sourceType": "sourceType",
      "sourceId": "sourceId",
      "destType": "destType",
      "destId": "destId",
      "assets": "assets",
      "txHash": "txHash",
      "sourceWalletId": "sourceWalletId",
      "destWalletId": "destWalletId"
    }
  },
  inputParamsSchema
}

export default tool