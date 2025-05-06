import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "code_scanning_get_codeql_database",
  "toolDescription": "Get a CodeQL database for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/code-scanning/codeql/databases/{language}",
  "method": "get",
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