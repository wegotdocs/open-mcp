import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reactions_create_for_team_discussion_legacy",
  "toolDescription": "Create reaction for a team discussion (Legacy)",
  "baseUrl": "https://api.github.com",
  "path": "/teams/{team_id}/discussions/{discussion_number}/reactions",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "team_id": "team_id",
      "discussion_number": "discussion_number"
    },
    "body": {
      "content": "content"
    }
  },
  inputParamsSchema
}

export default tool