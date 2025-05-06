import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_update_information_about_pages_site",
  "toolDescription": "Update information about a GitHub Pages site",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pages",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "cname": "cname",
      "https_enforced": "https_enforced",
      "build_type": "build_type",
      "source": "source"
    }
  },
  inputParamsSchema
}

export default tool