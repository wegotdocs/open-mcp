import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "write_git_file_api_git_file_post",
  "toolDescription": "Write Git File",
  "baseUrl": "https://api.example.com",
  "path": "/api/git/file",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "path": "path",
      "content": "content",
      "commit_message": "commit_message"
    }
  },
  inputParamsSchema
}

export default tool