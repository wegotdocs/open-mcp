import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getfiataccount",
  "toolDescription": "Find a specific fiat account",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/fiat_accounts/{accountId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "accountId": "accountId"
    }
  },
  inputParamsSchema
}

export default tool