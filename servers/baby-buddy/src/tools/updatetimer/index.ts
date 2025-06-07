import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatetimer",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/timers/{id}/",
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
      "name": "name",
      "start": "start",
      "start_max": "start_max",
      "start_min": "start_min",
      "user": "user",
      "ordering": "ordering"
    },
    "body": {
      "id": "b_id",
      "child": "b_child",
      "name": "b_name",
      "start": "b_start",
      "duration": "duration",
      "user": "b_user"
    }
  },
  inputParamsSchema
}

export default tool