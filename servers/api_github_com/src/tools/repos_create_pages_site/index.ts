import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_pages_site",
  "toolDescription": "Create a GitHub Pages site",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pages",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "build_type": "build_type",
      "source": "source"
    }
  },
  inputParamsSchema
}

export default tool