import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "destroyheight",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/height/{id}/",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "query": {
      "child": "child",
      "date": "date",
      "ordering": "ordering"
    }
  },
  inputParamsSchema
}

export default tool