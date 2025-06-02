import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getapikeys",
  "toolDescription": "Get all API keys",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/cosigners/{cosignerId}/api_keys",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "cosignerId": "cosignerId"
    },
    "query": {
      "order": "order",
      "pageCursor": "pageCursor",
      "pageSize": "pageSize"
    }
  },
  inputParamsSchema
}

export default tool