import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_add_custom_labels_to_self_hosted_runner_for_org",
  "toolDescription": "Add custom labels to a self-hosted runner for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/runners/{runner_id}/labels",
  "method": "post",
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