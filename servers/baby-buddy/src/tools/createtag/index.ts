import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createtag",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/tags/",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "slug": "slug",
      "name": "name",
      "color": "color",
      "last_used": "last_used"
    }
  },
  inputParamsSchema
}

export default tool