import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "copilot_cancel_copilot_seat_assignment_for_users",
  "toolDescription": "Remove users from the Copilot subscription for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/copilot/billing/selected_users",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "selected_usernames": "selected_usernames"
    }
  },
  inputParamsSchema
}

export default tool