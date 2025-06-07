import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateheadcircumference",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/head-circumference/{id}/",
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
      "head_circumference": "head_circumference",
      "date": "b_date",
      "notes": "notes",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool