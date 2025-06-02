import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getvalidationkeyslist",
  "toolDescription": "Get list of registered validation keys",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/key_link/validation_keys",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "pageCursor": "pageCursor",
      "pageSize": "pageSize",
      "sortBy": "sortBy",
      "order": "order"
    }
  },
  inputParamsSchema
}

export default tool