import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_create_remove_token_for_org",
  "toolDescription": "Create a remove token for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/runners/remove-token",
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