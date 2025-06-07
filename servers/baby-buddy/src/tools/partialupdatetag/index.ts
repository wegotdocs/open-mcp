import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "partialupdatetag",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/tags/{slug}/",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "slug": "slug"
    },
    "query": {
      "last_used": "last_used",
      "name": "name",
      "ordering": "ordering"
    },
    "body": {
      "slug": "b_slug",
      "name": "b_name",
      "color": "color",
      "last_used": "b_last_used"
    }
  },
  inputParamsSchema
}

export default tool