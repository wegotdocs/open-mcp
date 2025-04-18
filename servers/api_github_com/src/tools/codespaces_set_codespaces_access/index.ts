import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_set_codespaces_access",
  "toolDescription": "Manage access control for organization codespaces",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/codespaces/access",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "visibility": "visibility",
      "selected_usernames": "selected_usernames"
    }
  },
  inputParamsSchema
}

export default tool