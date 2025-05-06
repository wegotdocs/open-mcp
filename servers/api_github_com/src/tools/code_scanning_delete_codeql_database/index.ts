import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_scanning_delete_codeql_database",
  "toolDescription": "Delete a CodeQL database",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/code-scanning/codeql/databases/{language}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "language": "language"
    }
  },
  inputParamsSchema
}

export default tool