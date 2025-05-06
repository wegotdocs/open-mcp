import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "migrations_get_commit_authors",
  "toolDescription": "Get commit authors",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/import/authors",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "since": "since"
    }
  },
  inputParamsSchema
}

export default tool