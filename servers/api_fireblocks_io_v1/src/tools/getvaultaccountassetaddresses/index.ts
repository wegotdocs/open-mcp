import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getvaultaccountassetaddresses",
  "toolDescription": "Get asset addresses",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/vault/accounts/{vaultAccountId}/{assetId}/addresses",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "vaultAccountId": "vaultAccountId",
      "assetId": "assetId"
    }
  },
  inputParamsSchema
}

export default tool