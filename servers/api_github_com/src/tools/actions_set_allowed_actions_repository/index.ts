import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_set_allowed_actions_repository",
  "toolDescription": "Set allowed actions and reusable workflows for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/permissions/selected-actions",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
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