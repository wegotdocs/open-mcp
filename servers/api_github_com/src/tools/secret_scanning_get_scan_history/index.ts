import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "secret_scanning_get_scan_history",
  "toolDescription": "Get secret scanning scan history for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/secret-scanning/scan-history",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    }
  },
  inputParamsSchema
}

export default tool