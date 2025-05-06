import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_get_hosted_runners_platforms_for_org",
  "toolDescription": "Get platforms for GitHub-hosted runners in an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/hosted-runners/platforms",
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