import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_delete_hosted_runner_for_org",
  "toolDescription": "Delete a GitHub-hosted runner for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/hosted-runners/{hosted_runner_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "hosted_runner_id": "hosted_runner_id"
    }
  },
  inputParamsSchema
}

export default tool