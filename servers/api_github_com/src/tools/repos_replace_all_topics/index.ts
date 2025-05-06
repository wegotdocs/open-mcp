import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_replace_all_topics",
  "toolDescription": "Replace all repository topics",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/topics",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "names": "names"
    }
  },
  inputParamsSchema
}

export default tool