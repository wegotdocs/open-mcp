import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_create_discussion_legacy",
  "toolDescription": "Create a discussion (Legacy)",
  "baseUrl": "https://api.github.com",
  "path": "/teams/{team_id}/discussions",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "team_id": "team_id"
    },
    "body": {
      "title": "title",
      "body": "body",
      "private": "private"
    }
  },
  inputParamsSchema
}

export default tool