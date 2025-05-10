import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "searchvals",
  "toolDescription": "Search for vals across the platform",
  "baseUrl": "https://api.val.town",
  "path": "/v1/search/vals",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "offset": "offset",
      "limit": "limit",
      "query": "query"
    }
  },
  inputParamsSchema
}

export default tool