import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_list_languages",
  "toolDescription": "List repository languages",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/languages",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    }
  },
  inputParamsSchema
}

export default tool