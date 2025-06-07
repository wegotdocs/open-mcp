import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_latest_git_commit_api_git_latest_commit_get",
  "toolDescription": "Get Latest Git Commit",
  "baseUrl": "https://api.example.com",
  "path": "/api/git/latest-commit",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool