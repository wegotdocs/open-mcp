import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_create",
  "toolDescription": "Create a team",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/teams",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "name": "name",
      "description": "description",
      "maintainers": "maintainers",
      "repo_names": "repo_names",
      "privacy": "privacy",
      "notification_setting": "notification_setting",
      "permission": "permission",
      "parent_team_id": "parent_team_id"
    }
  },
  inputParamsSchema
}

export default tool