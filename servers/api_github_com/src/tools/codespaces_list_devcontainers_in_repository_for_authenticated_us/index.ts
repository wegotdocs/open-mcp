import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_list_devcontainers_in_repository_for_authenticated_us",
  "toolDescription": "List devcontainer configurations in a repository for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/codespaces/devcontainers",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool