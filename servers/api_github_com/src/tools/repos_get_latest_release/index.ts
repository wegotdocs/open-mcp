import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_latest_release",
  "toolDescription": "Get the latest release",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/releases/latest",
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