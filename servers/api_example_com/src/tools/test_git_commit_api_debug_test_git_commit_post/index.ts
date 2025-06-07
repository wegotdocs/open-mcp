import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "test_git_commit_api_debug_test_git_commit_post",
  "toolDescription": "Test Git Commit",
  "baseUrl": "https://api.example.com",
  "path": "/api/debug/test-git-commit",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool