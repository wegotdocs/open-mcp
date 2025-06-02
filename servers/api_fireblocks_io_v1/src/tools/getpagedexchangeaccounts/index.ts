import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpagedexchangeaccounts",
  "toolDescription": "List connected exchange accounts",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/exchange_accounts/paged",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "before": "before",
      "after": "after",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool