import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_update_for_authenticated_user",
  "toolDescription": "Update a codespace for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/codespaces/{codespace_name}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "codespace_name": "codespace_name"
    },
    "body": {
      "machine": "machine",
      "display_name": "display_name",
      "recent_folders": "recent_folders"
    }
  },
  inputParamsSchema
}

export default tool