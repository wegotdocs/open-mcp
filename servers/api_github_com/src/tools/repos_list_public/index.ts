import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_list_public",
  "toolDescription": "List public repositories",
  "baseUrl": "https://api.github.com",
  "path": "/repositories",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "since": "since"
    }
  },
  inputParamsSchema
}

export default tool