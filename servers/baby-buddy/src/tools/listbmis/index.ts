import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listbmis",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/bmi/",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "offset": "offset",
      "child": "child",
      "date": "date",
      "ordering": "ordering"
    }
  },
  inputParamsSchema
}

export default tool