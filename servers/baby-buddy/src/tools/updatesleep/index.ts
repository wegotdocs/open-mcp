import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatesleep",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/sleep/{id}/",
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
      "nap": "nap",
      "notes": "notes",
      "tags": "b_tags"
    }
  },
  inputParamsSchema
}

export default tool