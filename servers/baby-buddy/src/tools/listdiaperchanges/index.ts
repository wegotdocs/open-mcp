import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listdiaperchanges",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/changes/",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "offset": "offset",
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