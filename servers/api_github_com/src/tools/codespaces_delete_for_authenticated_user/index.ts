import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_delete_for_authenticated_user",
  "toolDescription": "Delete a codespace for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/codespaces/{codespace_name}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "codespace_name": "codespace_name"
    }
  },
  inputParamsSchema
}

export default tool