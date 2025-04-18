import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "copilot_add_copilot_seats_for_teams",
  "toolDescription": "Add teams to the Copilot subscription for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/copilot/billing/selected_teams",
  "method": "post",
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