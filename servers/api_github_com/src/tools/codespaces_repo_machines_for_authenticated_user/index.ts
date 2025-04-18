import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_repo_machines_for_authenticated_user",
  "toolDescription": "List available machine types for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/codespaces/machines",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "location": "location",
      "client_ip": "client_ip",
      "ref": "ref"
    }
  },
  inputParamsSchema
}

export default tool