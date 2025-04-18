import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_update_discussion_legacy",
  "toolDescription": "Update a discussion (Legacy)",
  "baseUrl": "https://api.github.com",
  "path": "/teams/{team_id}/discussions/{discussion_number}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "team_id": "team_id",
      "discussion_number": "discussion_number"
    },
    "body": {
      "title": "title",
      "body": "body"
    }
  },
  inputParamsSchema
}

export default tool