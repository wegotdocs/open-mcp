import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_update_hosted_runner_for_org",
  "toolDescription": "Update a GitHub-hosted runner for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/hosted-runners/{hosted_runner_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "hosted_runner_id": "hosted_runner_id"
    },
    "body": {
      "name": "name",
      "runner_group_id": "runner_group_id",
      "maximum_runners": "maximum_runners",
      "enable_static_ip": "enable_static_ip"
    }
  },
  inputParamsSchema
}

export default tool