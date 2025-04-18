import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_generate_runner_jitconfig_for_repo",
  "toolDescription": "Create configuration for a just-in-time runner for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/runners/generate-jitconfig",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
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