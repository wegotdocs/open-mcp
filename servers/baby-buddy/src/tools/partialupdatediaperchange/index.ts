import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "partialupdatediaperchange",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/changes/{id}/",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "query": {
      "amount": "amount",
      "child": "child",
      "color": "color",
      "date": "date",
      "date_max": "date_max",
      "date_min": "date_min",
      "solid": "solid",
      "wet": "wet",
      "tags": "tags",
      "ordering": "ordering"
    },
    "body": {
      "id": "b_id",
      "child": "b_child",
      "time": "time",
      "wet": "b_wet",
      "solid": "b_solid",
      "color": "b_color",
      "amount": "b_amount",
      "notes": "notes",
      "tags": "b_tags"
    }
  },
  inputParamsSchema
}

export default tool