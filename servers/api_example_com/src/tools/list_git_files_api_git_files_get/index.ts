import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_git_files_api_git_files_get",
  "toolDescription": "List Git Files",
  "baseUrl": "https://api.example.com",
  "path": "/api/git/files",
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