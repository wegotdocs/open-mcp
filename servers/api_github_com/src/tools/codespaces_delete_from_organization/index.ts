import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_delete_from_organization",
  "toolDescription": "Delete a codespace from the organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/members/{username}/codespaces/{codespace_name}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "username": "username",
      "codespace_name": "codespace_name"
    }
  },
  inputParamsSchema
}

export default tool