import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_tag_protection",
  "toolDescription": "Closing down - Create a tag protection state for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/tags/protection",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "pattern": "pattern"
    }
  },
  inputParamsSchema
}

export default tool