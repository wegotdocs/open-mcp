import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_pages_deployment",
  "toolDescription": "Get the status of a GitHub Pages deployment",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "pages_deployment_id": "pages_deployment_id"
    }
  },
  inputParamsSchema
}

export default tool