import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getvaultaccounts",
  "toolDescription": "List vault accounts",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/vault/accounts",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "namePrefix": "namePrefix",
      "nameSuffix": "nameSuffix",
      "minAmountThreshold": "minAmountThreshold",
      "assetId": "assetId"
    }
  },
  inputParamsSchema
}

export default tool