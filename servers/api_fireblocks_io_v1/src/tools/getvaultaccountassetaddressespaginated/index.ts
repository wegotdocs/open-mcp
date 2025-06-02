import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getvaultaccountassetaddressespaginated",
  "toolDescription": "Get addresses (Paginated)",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/vault/accounts/{vaultAccountId}/{assetId}/addresses_paginated",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "vaultAccountId": "vaultAccountId",
      "assetId": "assetId"
    },
    "query": {
      "limit": "limit",
      "before": "before",
      "after": "after"
    }
  },
  inputParamsSchema
}

export default tool