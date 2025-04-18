import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_deploy_key",
  "toolDescription": "Create a deploy key",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/keys",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "title": "title",
      "key": "key",
      "read_only": "read_only"
    }
  },
  inputParamsSchema
}

export default tool