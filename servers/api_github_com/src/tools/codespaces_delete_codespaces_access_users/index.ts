import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_delete_codespaces_access_users",
  "toolDescription": "Remove users from Codespaces access for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/codespaces/access/selected_users",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "selected_usernames": "selected_usernames"
    }
  },
  inputParamsSchema
}

export default tool