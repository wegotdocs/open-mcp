import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "copilot_add_copilot_seats_for_users",
  "toolDescription": "Add users to the Copilot subscription for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/copilot/billing/selected_users",
  "method": "post",
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