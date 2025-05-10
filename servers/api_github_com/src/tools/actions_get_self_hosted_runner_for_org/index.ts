import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_get_self_hosted_runner_for_org",
  "toolDescription": "Get a self-hosted runner for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/runners/{runner_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "runner_id": "runner_id"
    }
  },
  inputParamsSchema
}

export default tool