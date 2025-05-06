import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_set_self_hosted_runners_in_group_for_org",
  "toolDescription": "Set self-hosted runners in a group for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "runner_group_id": "runner_group_id"
    },
    "body": {
      "runners": "runners"
    }
  },
  inputParamsSchema
}

export default tool