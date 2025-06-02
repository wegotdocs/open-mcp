import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getwebhooks",
  "toolDescription": "Get all webhooks",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/webhooks",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "order": "order",
      "pageCursor": "pageCursor",
      "pageSize": "pageSize"
    }
  },
  inputParamsSchema
}

export default tool