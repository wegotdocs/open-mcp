import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getvaultassets",
  "toolDescription": "Get asset balance for chosen assets",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/vault/assets",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "accountNamePrefix": "accountNamePrefix",
      "accountNameSuffix": "accountNameSuffix"
    }
  },
  inputParamsSchema
}

export default tool