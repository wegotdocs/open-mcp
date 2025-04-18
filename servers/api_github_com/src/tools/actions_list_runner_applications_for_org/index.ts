import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_list_runner_applications_for_org",
  "toolDescription": "List runner applications for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/runners/downloads",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    }
  },
  inputParamsSchema
}

export default tool