import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_create_hosted_runner_for_org",
  "toolDescription": "Create a GitHub-hosted runner for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/hosted-runners",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "name": "name",
      "image": "image",
      "size": "size",
      "runner_group_id": "runner_group_id",
      "maximum_runners": "maximum_runners",
      "enable_static_ip": "enable_static_ip"
    }
  },
  inputParamsSchema
}

export default tool