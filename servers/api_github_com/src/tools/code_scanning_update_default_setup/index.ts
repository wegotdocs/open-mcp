import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_scanning_update_default_setup",
  "toolDescription": "Update a code scanning default setup configuration",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/code-scanning/default-setup",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "state": "state",
      "runner_type": "runner_type",
      "runner_label": "runner_label",
      "query_suite": "query_suite",
      "languages": "languages"
    }
  },
  inputParamsSchema
}

export default tool