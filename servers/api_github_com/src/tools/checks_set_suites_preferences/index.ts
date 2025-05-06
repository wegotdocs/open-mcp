import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "checks_set_suites_preferences",
  "toolDescription": "Update repository preferences for check suites",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/check-suites/preferences",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "auto_trigger_checks": "auto_trigger_checks"
    }
  },
  inputParamsSchema
}

export default tool