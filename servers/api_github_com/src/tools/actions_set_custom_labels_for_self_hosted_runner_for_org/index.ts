import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_set_custom_labels_for_self_hosted_runner_for_org",
  "toolDescription": "Set custom labels for a self-hosted runner for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/runners/{runner_id}/labels",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "runner_id": "runner_id"
    },
    "body": {
      "labels": "labels"
    }
  },
  inputParamsSchema
}

export default tool