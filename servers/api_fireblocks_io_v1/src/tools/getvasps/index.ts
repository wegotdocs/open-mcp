import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getvasps",
  "toolDescription": "Get All VASPs",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/screening/travel_rule/vasp",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "order": "order",
      "pageSize": "pageSize",
      "fields": "fields",
      "search": "search",
      "reviewValue": "reviewValue",
      "pageCursor": "pageCursor"
    }
  },
  inputParamsSchema
}

export default tool