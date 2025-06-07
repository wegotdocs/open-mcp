import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "initialize_git_repository_api_git_initialize_post",
  "toolDescription": "Initialize Git Repository",
  "baseUrl": "https://api.example.com",
  "path": "/api/git/initialize",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "force": "force"
    }
  },
  inputParamsSchema
}

export default tool