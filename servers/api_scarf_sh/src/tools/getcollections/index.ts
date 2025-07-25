import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcollections",
  "toolDescription": "List collections",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/collections/{owner}",
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