import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpixelsoverview",
  "toolDescription": "List pixels overview",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/pixels/{owner}/overview",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "after": "after",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool