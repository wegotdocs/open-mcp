import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_disable_selected_repository_github_actions_organization",
  "toolDescription": "Disable a selected repository for GitHub Actions in an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/permissions/repositories/{repository_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "repository_id": "repository_id"
    }
  },
  inputParamsSchema
}

export default tool