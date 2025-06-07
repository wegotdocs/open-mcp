import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "destroytag",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/tags/{slug}/",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "slug": "slug"
    },
    "query": {
      "last_used": "last_used",
      "name": "name",
      "ordering": "ordering"
    }
  },
  inputParamsSchema
}

export default tool