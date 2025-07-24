import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpackages",
  "toolDescription": "List packages",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/packages/{owner}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "type": "type",
      "permission": "permission",
      "after": "after",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool