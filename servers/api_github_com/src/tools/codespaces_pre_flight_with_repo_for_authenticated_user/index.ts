import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_pre_flight_with_repo_for_authenticated_user",
  "toolDescription": "Get default attributes for a codespace",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/codespaces/new",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "ref": "ref",
      "client_ip": "client_ip"
    }
  },
  inputParamsSchema
}

export default tool