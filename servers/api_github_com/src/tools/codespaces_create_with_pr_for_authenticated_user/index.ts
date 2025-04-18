import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_create_with_pr_for_authenticated_user",
  "toolDescription": "Create a codespace from a pull request",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pulls/{pull_number}/codespaces",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "pull_number": "pull_number"
    },
    "body": {
      "location": "location",
      "geo": "geo",
      "client_ip": "client_ip",
      "machine": "machine",
      "devcontainer_path": "devcontainer_path",
      "multi_repo_permissions_opt_out": "multi_repo_permissions_opt_out",
      "working_directory": "working_directory",
      "idle_timeout_minutes": "idle_timeout_minutes",
      "display_name": "display_name",
      "retention_period_minutes": "retention_period_minutes"
    }
  },
  inputParamsSchema
}

export default tool