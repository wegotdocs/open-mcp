import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_get_github_actions_default_workflow_permissions_organiza",
  "toolDescription": "Get default workflow permissions for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/permissions/workflow",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    }
  },
  inputParamsSchema
}

export default tool