import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_generate_runner_jitconfig_for_org",
  "toolDescription": "Create configuration for a just-in-time runner for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/runners/generate-jitconfig",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "name": "name",
      "runner_group_id": "runner_group_id",
      "labels": "labels",
      "work_folder": "work_folder"
    }
  },
  inputParamsSchema
}

export default tool