import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_delete_tag_protection",
  "toolDescription": "Closing down - Delete a tag protection state for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/tags/protection/{tag_protection_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "tag_protection_id": "tag_protection_id"
    }
  },
  inputParamsSchema
}

export default tool