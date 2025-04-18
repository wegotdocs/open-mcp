import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_deploy_key",
  "toolDescription": "Get a deploy key",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/keys/{key_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "key_id": "key_id"
    }
  },
  inputParamsSchema
}

export default tool