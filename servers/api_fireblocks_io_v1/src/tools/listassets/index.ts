import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listassets",
  "toolDescription": "List assets",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/assets",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "blockchainId": "blockchainId",
      "assetClass": "assetClass",
      "symbol": "symbol",
      "scope": "scope",
      "deprecated": "deprecated",
      "ids": "ids",
      "pageCursor": "pageCursor",
      "pageSize": "pageSize"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool