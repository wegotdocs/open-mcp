import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_cancel_pages_deployment",
  "toolDescription": "Cancel a GitHub Pages deployment",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel",
  "method": "post",
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