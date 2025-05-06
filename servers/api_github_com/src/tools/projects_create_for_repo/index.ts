import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "projects_create_for_repo",
  "toolDescription": "Create a repository project",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/projects",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "name": "name",
      "body": "body"
    }
  },
  inputParamsSchema
}

export default tool