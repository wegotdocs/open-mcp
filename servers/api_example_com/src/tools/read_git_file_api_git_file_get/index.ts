import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "read_git_file_api_git_file_get",
  "toolDescription": "Read Git File",
  "baseUrl": "https://api.example.com",
  "path": "/api/git/file",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "path": "path"
    }
  },
  inputParamsSchema
}

export default tool