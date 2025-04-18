import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_set_selected_repositories_enabled_github_actions_organiz",
  "toolDescription": "Set selected repositories enabled for GitHub Actions in an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/permissions/repositories",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "selected_repository_ids": "selected_repository_ids"
    }
  },
  inputParamsSchema
}

export default tool