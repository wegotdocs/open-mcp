import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createnewcollection",
  "toolDescription": "Create a new collection",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tokenization/collections",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "baseAssetId": "baseAssetId",
      "vaultAccountId": "vaultAccountId",
      "type": "type",
      "name": "name",
      "symbol": "symbol",
      "adminAddress": "adminAddress",
      "displayName": "displayName"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool