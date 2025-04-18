import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_delete_deploy_key",
  "toolDescription": "Delete a deploy key",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/keys/{key_id}",
  "method": "delete",
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