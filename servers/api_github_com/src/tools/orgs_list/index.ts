import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_list",
  "toolDescription": "List organizations",
  "baseUrl": "https://api.github.com",
  "path": "/organizations",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "since": "since",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool