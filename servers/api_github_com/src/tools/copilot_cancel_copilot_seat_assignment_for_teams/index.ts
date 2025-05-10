import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "copilot_cancel_copilot_seat_assignment_for_teams",
  "toolDescription": "Remove teams from the Copilot subscription for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/copilot/billing/selected_teams",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "selected_teams": "selected_teams"
    }
  },
  inputParamsSchema
}

export default tool