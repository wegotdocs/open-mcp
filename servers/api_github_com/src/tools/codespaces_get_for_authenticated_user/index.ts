import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_get_for_authenticated_user",
  "toolDescription": "Get a codespace for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/codespaces/{codespace_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "codespace_name": "codespace_name"
    }
  },
  inputParamsSchema
}

export default tool