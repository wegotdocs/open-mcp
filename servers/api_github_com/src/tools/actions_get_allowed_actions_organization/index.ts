import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_get_allowed_actions_organization",
  "toolDescription": "Get allowed actions and reusable workflows for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/permissions/selected-actions",
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