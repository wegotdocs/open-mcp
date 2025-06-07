import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "destroyfeeding",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/feedings/{id}/",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "query": {
      "child": "child",
      "end": "end",
      "end_max": "end_max",
      "end_min": "end_min",
      "method": "method",
      "start": "start",
      "start_max": "start_max",
      "start_min": "start_min",
      "type": "type",
      "tags": "tags",
      "ordering": "ordering"
    }
  },
  inputParamsSchema
}

export default tool