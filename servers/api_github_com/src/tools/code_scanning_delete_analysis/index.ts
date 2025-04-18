import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_scanning_delete_analysis",
  "toolDescription": "Delete a code scanning analysis from a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "analysis_id": "analysis_id"
    },
    "query": {
      "confirm_delete": "confirm_delete"
    }
  },
  inputParamsSchema
}

export default tool