import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listtummytimes",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/tummy-times/",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "offset": "offset",
      "child": "child",
      "end": "end",
      "end_max": "end_max",
      "end_min": "end_min",
      "start": "start",
      "start_max": "start_max",
      "start_min": "start_min",
      "tags": "tags",
      "ordering": "ordering"
    }
  },
  inputParamsSchema
}

export default tool