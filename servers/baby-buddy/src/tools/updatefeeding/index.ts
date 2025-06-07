import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatefeeding",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/feedings/{id}/",
  "method": "put",
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
    },
    "body": {
      "id": "b_id",
      "child": "b_child",
      "start": "b_start",
      "end": "b_end",
      "timer": "timer",
      "duration": "duration",
      "type": "b_type",
      "method": "b_method",
      "amount": "amount",
      "notes": "notes",
      "tags": "b_tags"
    }
  },
  inputParamsSchema
}

export default tool