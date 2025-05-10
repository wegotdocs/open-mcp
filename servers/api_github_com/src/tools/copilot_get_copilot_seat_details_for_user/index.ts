import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "copilot_get_copilot_seat_details_for_user",
  "toolDescription": "Get Copilot seat assignment details for a user",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/members/{username}/copilot",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool