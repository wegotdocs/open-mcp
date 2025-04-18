import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "licenses_get_all_commonly_used",
  "toolDescription": "Get all commonly used licenses",
  "baseUrl": "https://api.github.com",
  "path": "/licenses",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "featured": "featured",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool