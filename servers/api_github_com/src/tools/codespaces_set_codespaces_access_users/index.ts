import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_set_codespaces_access_users",
  "toolDescription": "Add users to Codespaces access for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/codespaces/access/selected_users",
  "method": "post",
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