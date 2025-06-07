import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatepumping",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/pumping/{id}/",
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
      "start": "start",
      "start_max": "start_max",
      "start_min": "start_min",
      "ordering": "ordering"
    },
    "body": {
      "id": "b_id",
      "child": "b_child",
      "amount": "amount",
      "start": "b_start",
      "end": "b_end",
      "duration": "duration",
      "notes": "notes",
      "tags": "tags",
      "timer": "timer"
    }
  },
  inputParamsSchema
}

export default tool