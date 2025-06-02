import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsigningkeyslist",
  "toolDescription": "Get list of signing keys",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/key_link/signing_keys",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "pageCursor": "pageCursor",
      "pageSize": "pageSize",
      "sortBy": "sortBy",
      "order": "order",
      "vaultAccountId": "vaultAccountId",
      "agentUserId": "agentUserId",
      "algorithm": "algorithm",
      "enabled": "enabled",
      "available": "available"
    }
  },
  inputParamsSchema
}

export default tool