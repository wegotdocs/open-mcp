import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "destroydiaperchange",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/changes/{id}/",
  "method": "delete",
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
    }
  },
  inputParamsSchema
}

export default tool