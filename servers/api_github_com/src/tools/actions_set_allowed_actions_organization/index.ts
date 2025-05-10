import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_set_allowed_actions_organization",
  "toolDescription": "Set allowed actions and reusable workflows for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/permissions/selected-actions",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "github_owned_allowed": "github_owned_allowed",
      "verified_allowed": "verified_allowed",
      "patterns_allowed": "patterns_allowed"
    }
  },
  inputParamsSchema
}

export default tool