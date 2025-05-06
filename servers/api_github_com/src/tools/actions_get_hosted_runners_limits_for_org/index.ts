import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_get_hosted_runners_limits_for_org",
  "toolDescription": "Get limits on GitHub-hosted runners for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/hosted-runners/limits",
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