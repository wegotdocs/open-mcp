import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_request_pages_build",
  "toolDescription": "Request a GitHub Pages build",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pages/builds",
  "method": "post",
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