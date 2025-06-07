import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrievetemperature",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/temperature/{id}/",
  "method": "get",
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
    }
  },
  inputParamsSchema
}

export default tool