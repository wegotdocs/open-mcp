import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "partialupdatetemperature",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/temperature/{id}/",
  "method": "patch",
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
      "temperature": "temperature",
      "time": "time",
      "notes": "notes",
      "tags": "b_tags"
    }
  },
  inputParamsSchema
}

export default tool