import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_remove_all_custom_labels_from_self_hosted_runner_for_org",
  "toolDescription": "Remove all custom labels from a self-hosted runner for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/runners/{runner_id}/labels",
  "method": "delete",
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