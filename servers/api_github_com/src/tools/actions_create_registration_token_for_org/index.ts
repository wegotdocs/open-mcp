import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_create_registration_token_for_org",
  "toolDescription": "Create a registration token for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/runners/registration-token",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    }
  },
  inputParamsSchema
}

export default tool