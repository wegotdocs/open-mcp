import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listnotes",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/notes/",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "offset": "offset",
      "child": "child",
      "date": "date",
      "date_max": "date_max",
      "date_min": "date_min",
      "tags": "tags",
      "ordering": "ordering"
    }
  },
  inputParamsSchema
}

export default tool