import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_get_codespaces_for_user_in_org",
  "toolDescription": "List codespaces for a user in organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/members/{username}/codespaces",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "username": "username"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool