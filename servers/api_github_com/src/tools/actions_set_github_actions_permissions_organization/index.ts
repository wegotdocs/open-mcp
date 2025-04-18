import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_set_github_actions_permissions_organization",
  "toolDescription": "Set GitHub Actions permissions for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/permissions",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "enabled_repositories": "enabled_repositories",
      "allowed_actions": "allowed_actions"
    }
  },
  inputParamsSchema
}

export default tool