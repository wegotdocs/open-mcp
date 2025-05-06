import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "migrations_map_commit_author",
  "toolDescription": "Map a commit author",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/import/authors/{author_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "author_id": "author_id"
    },
    "body": {
      "email": "email",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool