import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateweight",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/weight/{id}/",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "query": {
      "child": "child",
      "date": "date",
      "ordering": "ordering"
    },
    "body": {
      "id": "b_id",
      "child": "b_child",
      "weight": "weight",
      "date": "b_date",
      "notes": "notes",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool