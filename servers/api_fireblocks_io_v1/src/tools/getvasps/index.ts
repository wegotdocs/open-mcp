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
      "per_page": "per_page",
      "page": "page",
      "fields": "fields",
      "q": "q",
      "reviewValue": "reviewValue"
    }
  },
  inputParamsSchema
}

export default tool