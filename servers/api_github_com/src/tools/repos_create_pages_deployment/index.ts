import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_pages_deployment",
  "toolDescription": "Create a GitHub Pages deployment",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pages/deployments",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "artifact_id": "artifact_id",
      "artifact_url": "artifact_url",
      "environment": "environment",
      "pages_build_version": "pages_build_version",
      "oidc_token": "oidc_token"
    }
  },
  inputParamsSchema
}

export default tool