import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listtags",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/tags/",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "offset": "offset",
      "last_used": "last_used",
      "name": "name",
      "ordering": "ordering"
    }
  },
  inputParamsSchema
}

export default tool