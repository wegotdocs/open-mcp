import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pull_changes_api_system_git_pull_post",
  "toolDescription": "Pull Changes",
  "baseUrl": "https://api.example.com",
  "path": "/api/system/git/pull",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool