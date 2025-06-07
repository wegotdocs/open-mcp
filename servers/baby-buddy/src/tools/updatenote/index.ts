import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatenote",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/notes/{id}/",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "query": {
      "child": "child",
      "date": "date",
      "date_max": "date_max",
      "date_min": "date_min",
      "tags": "tags",
      "ordering": "ordering"
    },
    "body": {
      "id": "b_id",
      "child": "b_child",
      "note": "note",
      "image": "image",
      "time": "time",
      "tags": "b_tags"
    }
  },
  inputParamsSchema
}

export default tool