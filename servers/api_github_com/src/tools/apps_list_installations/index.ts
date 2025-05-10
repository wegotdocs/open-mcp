import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_list_installations",
  "toolDescription": "List installations for the authenticated app",
  "baseUrl": "https://api.github.com",
  "path": "/app/installations",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "per_page": "per_page",
      "page": "page",
      "since": "since",
      "outdated": "outdated"
    }
  },
  inputParamsSchema
}

export default tool