import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "searchnetworkids",
  "toolDescription": "Get both local IDs and discoverable remote IDs",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/network_ids/search",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "search": "search",
      "excludeSelf": "excludeSelf",
      "excludeConnected": "excludeConnected",
      "pageCursor": "pageCursor",
      "pageSize": "pageSize"
    }
  },
  inputParamsSchema
}

export default tool